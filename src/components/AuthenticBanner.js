import React, { Component } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import NameGenerator from "./NameGenerator";

class AuthenticBanner extends Component {
  render() {
    return (
      <Row>
        <Col id="teaSetContainer" fluid sm={12} md={12} lg={5} xl={5}>
          <Image src="/image/side-image.jpg" id="teaSet" rounded fluid/>
        </Col>
        <Col fulid sm={12} md={12} lg={7} xl={7}>
          <NameGenerator />
        </Col>
      </Row>
    );
  }
}

export default AuthenticBanner;
