import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContactInfo() {
  return (
    <Container className="contact-info">
      <Row>
        <Col>
          <i class="fas fa-envelope"></i>
          <p>hello@yay.com</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <i class="fas fa-phone"></i>
          <p>123 456 7890</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <i class="fas fa-map-marker-alt"></i>
          <p>123 Some Street Somewhere Some City 10000</p>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
