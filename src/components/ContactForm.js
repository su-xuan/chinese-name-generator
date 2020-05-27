import React, { Component } from "react";
import "../index.css";
import {
  Form,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
      submitted: false,
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEnter(input) {
    const target = input.target;
    const value = input.target.value;
    const name = target.id;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    if(this.state.description === "" || this.state.email === "")
      {alert("Please complete the form before submit. ")}
    else {alert(
          "Thank you for your interest, you'll receive a cutomised Chinese name within 10 days!"
        );
        this.setState({submitted: true});
      }
  }
  render() {
    return (
      <div className="contact-form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormLabel htmlFor="description">
              Tell me about yourself, let me know what’s your expectation.
            </FormLabel>
            <FormControl
              type="text"
              id="description"
              onChange="this.handleEnter.bind(this)"
              className="description-input"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">
              Please also leave your email address here, then I can sent you a
              tailored name.
            </FormLabel>
            <FormControl
              type="email"
              id="email"
              onChange="this.handleEnter.bind(this)"
            />
          </FormGroup>
          <Button
            variant="primary"
            type="submit"
            className="submitButton"
            block
          >
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
