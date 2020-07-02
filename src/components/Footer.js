import React, {Component} from 'react'
import { Row, Col, Modal } from "react-bootstrap";


class Footer extends Component {
  render (){
    return (
      <Modal.Footer>
        <Row >
          <Col fulid sm={12} lg={9} id="services">
            <p>Free Chinese Name Translator</p>
            <p>Authentic Chinese Name Generator</p>
            <p>Get a Customised Chinese Name</p>
          </Col>
          <Col fluid sm={12} lg={3} id="Copyright">
            <p>Copyright &copy; 2020 Xuan Su</p>
          </Col>
        </Row>
      </Modal.Footer>
    )
  }

}


export default Footer
