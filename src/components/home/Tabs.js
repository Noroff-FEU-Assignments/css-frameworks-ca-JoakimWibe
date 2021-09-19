import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function HomeTabs() {
  return (
    <div className="d-none d-md-block">
      <Container>
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="first" title="First">
            <Container>
              <Row>
                <Col>
                  <Image src="./images/tabs/tab-1.jpg" fluid />
                </Col>
                <Col>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="share">
                    <p>SHARE</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="second" title="Second">
            <Container>
              <Row>
                <Col>
                  <Image src="./images/tabs/tab-2.jpg" fluid />
                </Col>
                <Col>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="share">
                    <p>SHARE</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="third" title="Third">
            <Container>
              <Row>
                <Col>
                  <Image src="./images/tabs/tab-3.jpg" fluid />
                </Col>
                <Col>
                  <p>
                    Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a
                    ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.
                  </p>
                  <div className="share">
                    <p>SHARE</p>
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                  </div>
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default HomeTabs;
