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
    const value = target.value;
    const name = target.id;
    this.setState({ [name]: value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.description.length || !this.state.email.length) {
      alert(`Please complete the form before submit.`);
    } else {
      const data = {
        description: this.state.description,
        email: this.state.email
      };
      fetch('http://localhost:5000/sendMail', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        mode: "cors",
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(
        data => {
          console.log('Sucess:', data);
          alert('Request submitted. Thank you for the interest! ');
        })
        .catch((error) => {console.log('Error:', error);
      });
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
              onChange={this.handleEnter.bind(this)}
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
              onChange={this.handleEnter.bind(this)}
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
