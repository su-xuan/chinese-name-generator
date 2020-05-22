import React, { Component } from "react";
import '../index.css';
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormLabel
} from "react-bootstrap";
import PhoneticName from "./PhoneticName";



class NameTranslator extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      submitted: false,
      chineseName: '',
      submittedUsername: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEnter(input) {
    if(input.length<=0) {
        this.setState({
            username: '',
            submitted: false,
            chineseName: ''
        })
    } else {
        this.setState({
            username: input.target.value
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
        "Content-Type": "application/json"
      },
    }).then(function(response) {
        console.log(response);
        if(response.status === 200) {
            return response.json();
        } else {
            return 'Server Error';
        }
    }, function(error){
        console.log(error.message);
    }).then(function(json) {
        console.log(json);
        that.setState({
            submitted: true,
            chineseName: json.names[0].chineseName,
            submittedUsername: that.state.username
        })
    });
  }

  componentDidUpdate(prevProps, prevState) {
      if(prevProps.data !== this.props.data) {

      }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormLabel>Enter your name:</FormLabel>
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
