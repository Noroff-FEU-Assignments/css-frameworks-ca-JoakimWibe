import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";

function HomeAccordion() {
  return (
    <Accordion className="d-md-none">
      <Container>
        <Accordion.Item eventKey="0">
          <Accordion.Header>First</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.{" "}
            </p>
            <Image src="./images/tabs/tab-1.jpg" fluid />
            <div className="share">
              <p>SHARE</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Second</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.{" "}
            </p>
            <Image src="./images/tabs/tab-2.jpg" fluid />
            <div className="share">
              <p>SHARE</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Third</Accordion.Header>
          <Accordion.Body>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
              ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.{" "}
            </p>
            <Image src="./images/tabs/tab-3.jpg" fluid />
            <div className="share">
              <p>SHARE</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Container>
    </Accordion>
  );
}

export default HomeAccordion;
