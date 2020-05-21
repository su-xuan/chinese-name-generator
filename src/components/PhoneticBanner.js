import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import NameTranslator from "./NameTranslator";

class PhoneticBanner extends Component {
  render() {
    return (
      <Container className="main-container phonetic">
        <Row>
          <Col fluid lg={6}>
            <Image src="/image/banner.jpg" fluid id="watertown" />
          </Col>
          <Col lg={6} Id="name-search">
            <Row>
              <h1>Write your name in Chinese?</h1>
            </Row>
            <Row>
              <NameTranslator />
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PhoneticBanner;
