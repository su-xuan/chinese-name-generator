import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './ContactForm'

class TailoredBanner extends Component {
  render(){
    return(
      <Container className="tailored">
        <Col fluid lg={{span:8, offset:2}}>
        <Row>
         <p>Unlike western names, a Chinese name could be really <i>creative, flexible and gender non-exclusive</i>. We can easily get a gender neutralized name in Chinese.<br/>
         To get a tailored Chinese name you can tell me about yourself, like your birth month/year, birth order among the siblings and birth place, something you love or something memorable that you'd like to refer to.<br />
         For example some parents name their kid <b>雨</b>, which means rain, cause the kid was born in a raining day. Some parents name their kid <b>乐</b>, which mean happy, to bless their kid with life-long happiness.
         </p>
        </Row>
        <Row>
        <ContactForm />
        </Row>
        </Col>

      </Container>
    )
  }
}

export default TailoredBanner
