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
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEnter(input) {}

  handleSubmit(event) {}

  render() {
    return (
      <div className="contact-form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormLabel>
              Tell me about yourself, let me know what’s your expectation.
            </FormLabel>
            <FormControl
              type="text"
              id="description"
              onChange="this.handleEnter"
              className="description-input"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>
              Please also leave your email address here, then I can sent you a
              tailored name.
            </FormLabel>
            <FormControl type="text" id="email" onChange="this.handleEnter" />
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
