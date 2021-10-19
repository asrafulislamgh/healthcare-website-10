import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import doctor from "../../img/2.png";
import "./CEO.css";

const CEO = () => {
  return (
    <div>
      <Row className="pt-5 gy-5 d-flex align-items-center">
        <Col lg={5} md={6} sm={12} className="order-2 order-lg-1 order-md-1">
          <img className="w-100" src={doctor} alt="" />
        </Col>
        <Col
          lg={7}
          md={6}
          sm={12}
          className="px-5 order-1 order-lg-2 order-md-2"
        >
          <div>
            <h1 className="mb-3 doctor-heading display-3">
              <span>We are happy</span> to help you.
            </h1>
            <p>
              Founded in 1989 by Harvard Medical School professors, Best Doctors
              is a global benefits provider that serves more than 40 million
              members in every major region of the world.
              <br />
              <br />
              Best Doctors’ innovative services include access to an unrivaled
              network of physicians who have been selected as the best in their
              field by other leading doctors. With every service offered, the
              goal remains the same: to help people in need get the right
              diagnosis and treatment, significantly improving health outcomes.
            </p>
            <Button variant="light" className="common-btn my-3">
              See More
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CEO;
