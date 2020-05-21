import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import NameGenerator from "./NameGenerator";

class AuthenticBanner extends Component {
  render() {
    return (
      <Container className="main-container authentic">
        <Row>
          <Col sm={7} lg={7}>
            <NameGenerator />
          </Col>
          <Col sm={5} lg={5}>
            <Image src="/image/side-image.jpg" Id="teaSet" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AuthenticBanner;
