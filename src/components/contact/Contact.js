import React from "react";
import Form from "./Form";
import ContactInfo from "./ContactInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Contact() {
  return (
    <>
      <Container>
        <h1>Submit your details</h1>
      </Container>
      <Container>
        <Row>
          <Col md={{ order: 2 }}>
            <ContactInfo />
          </Col>
          <Col md={{ order: 1 }}>
            <Form />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
