import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HeaderTop.css";

const HeaderTop = () => {
  return (
    <div className="top-header">
      <Container>
        <Row className="py-2">
          <Col lg={4}>
            <div className="d-flex">
              <i className="far fa-clock me-2 py-1"></i>
              <p className="header-top-text">Monday - Friday (8.00-20.00)</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex">
              <i className="fas fa-phone-alt me-2 py-1"></i>
              <p className="header-top-text">+880193033**02</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="d-flex">
              <i className="fas fa-thumbtack me-2 py-1"></i>
              <p className="header-top-text">1 Gulshan Avenue</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderTop;
