import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";

class NameGenerator extends Component {
  constructor() {
    super();
    this.state = {
      text: [
        'I know that you’re not satisfied with just a phonetic version of your name.',
      'This sounds like … a foreigner.',
      'Want an authentic Chinese name?',
      'Click here to get an authentic Chinese name!'],
      submitted: false,
      chineseName: "",
      button: "I WANT A CHINESE NAME!"
    };
    this.handleClick = this.handleClick.bind(this);
  }

handleClick() {
  this.submitted? this.setState({
    submitted:false
  }):this.setState({
    text: [
      'Congratulations!',
      'We randomly picked a gender non-exclusive Chinese given name for you, which is:'
    ],
    submitted:true,
    chineseName:"test",
    button: "Don’t like it? Try it again"
  })
};

  render() {
    return (
      <Container fluid="md">
        <Row>
        <h3> {this.state.text.map((text) => {return <p>{text}</p>})}</h3>
        </Row>
        <Row>
        <p id="Name">{this.state.chineseName}</p>
        </Row>
        <Row><Button size="lg" block className="submitButton" onClick={this.handleClick}>{this.state.button}</Button></Row>
      </Container>
    );
  }
}

export default NameGenerator;
