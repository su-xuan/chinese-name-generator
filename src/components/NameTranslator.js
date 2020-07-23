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
      oldValue:""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleEnter(input) {
    if (input.length <= 0) {
      this.setState({
        username: "",
        chineseName: "",
      });
    } else {
      if(this.oldValue !== input.target.value){
        this.setState({
          username: input.target.value,
          submitted: false,
          submittedUsername: ""
        });
      }
    }
  }


  handleSubmit(event) {
    event.preventDefault();
    const that = this;
    fetch(`${process.env.REACT_APP_SERVER}/getName?name=${this.state.username}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
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
        if (!json.names || !json.names.length) {
          alert("Unfortunately our name dictionary doesn't know your name yet. Please try to use the contact form on Tailored page. Let me help you!");

        } else {
          that.setState((state)=>{
            return {
              submitted: true,
              chineseName: json.names[0].chineseName,
              submittedUsername: state.username,
            }
          } );
        }
      })
  }


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormLabel htmlFor="first-name">Name translation:</FormLabel>
          <FormControl
            type="text"
            id="first-name"
            onChange={this.handleEnter}
            required
            placeholder="Enter your name "
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
