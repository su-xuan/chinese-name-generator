import React, { Component } from "react";
import "../index.css";
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import PhoneticName from "./PhoneticName";

class NameTranslator extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      submitted: false,
      chineseName: "",
      submittedUsername: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEnter(input) {
    if (input.length <= 0) {
      this.setState({
        username: "",
        submitted: false,
        chineseName: "",
      });
    } else {
      this.setState({
        username: input.target.value,
      });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    const that = this;
    fetch(`/getName?name=${this.state.username}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(
        function (response) {
          console.log(response);
          if (response.status === 200) {
            return response.json();
          } else {
            return "Server Error";
          }
        },
        function (error) {
          console.log(error.message);
        }
      )
      .then(function (json) {
        console.log(json);
        if (Object.hasOwnProperty("chineseName")) {
          throw new Error(
            "Unfortunately our name dictionary doesn't know your name yet. Please try to use the contact form on Tailored page. Let me help you!"
          );
        } else {
          that.setState({
            submitted: true,
            chineseName: "Butts", // json.names[0].chineseName,
            submittedUsername: that.state.username,
          });
        }
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="first-name">Enter your name:</FormLabel>
          <FormControl
            type="text"
            id="first-name"
            onChange={this.handleEnter}
          />
          <Button variant="primary" type="submit" className="submitButton">
            Submit
          </Button>
        </FormGroup>
        <PhoneticName
          submittedUsername={this.state.submittedUsername}
          submitted={this.state.submitted}
          chineseName={this.state.chineseName}
          username={this.state.username}
        />
      </Form>
    );
  }
}

export default NameTranslator;
