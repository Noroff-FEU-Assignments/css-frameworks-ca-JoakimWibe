import React from "react";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function ContactForm() {
  return (
    <Form>
      <Row className="align-items-center">
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputName">Name</Form.Label>
          <Form.Control id="inlineFormInputName" />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputName">Email</Form.Label>
          <Form.Control id="inlineFormInputName" />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputGroupUsername">Website</Form.Label>
          <InputGroup>
            <InputGroup.Text>https://</InputGroup.Text>
            <FormControl id="inlineFormInputGroupUsername" />
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col className="my-1">
          <Form.Label htmlFor="inlineFormInputGroupUsername">Message</Form.Label>
          <InputGroup>
            <Form.Control as="textarea" rows={3} />
          </InputGroup>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs="auto" className="my-1">
          <Form.Check type="checkbox" id="autoSizingCheck2" label="Allow us to sell your personal details to whomever we want" />
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col xs="auto" className="my-1">
          <Button variant="submit" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactForm;
