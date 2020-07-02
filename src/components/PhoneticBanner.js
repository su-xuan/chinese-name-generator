import React, { Component } from "react";
import { Image, Row, Col } from "react-bootstrap";
import NameTranslator from "./NameTranslator";

class PhoneticBanner extends Component {
  render() {
    return (
      <Row>
        <Col fluid sm={12} md={12} lg={6} xl={6}>
          <Image src="/image/banner.jpg" fluid id="watertown" />
        </Col>
        <Col fulid sm={12} md={12} lg={6} xl={6} id="name-search">
            <h1>Write your name in Chinese?</h1>
            <NameTranslator />
        </Col>
      </Row>
    );
  }
}

export default PhoneticBanner;
