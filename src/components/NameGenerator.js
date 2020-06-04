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
      gender: 'neutral',
      button: "I WANT A CHINESE NAME!"
    };
    this.handleClick = this.handleClick.bind(this);
  };


handleClick() {
  const that = this;
  fetch(`/getRandomName?gender=${this.state.gender}`, {
    method: "GET",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(
    function (response) {
      console.log(response);
      if (response.status === 200)  {
        return response.json();
      } else {
        return "Server Error";
      }
    },
    function (error) {
      console.log(error.message);
    }

  )
  .then(
    function (json) {
      that.submitted? that.setState({
        submitted:false
      }):that.setState({
        text: [
          'Congratulations!',
          'We randomly picked a gender non-exclusive Chinese given name for you, which is:'
        ],
        submitted:true,
        chineseName: json.chineseName[0].given_name,
        button: "Don’t like it? Try it again"
      });
    }
  )

};

  render() {
    return (
      <Container fluid="md">
        <Row>
        <h3> {this.state.text.map((text) => {return <p key={text} >{text}</p>})}</h3>
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
