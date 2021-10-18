import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logoFooter from "../../../img/logofooter.png";
import news1 from "../../../img/news/1.jpg";
import news2 from "../../../img/news/2.jpg";
import news3 from "../../../img/news/3.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="bg-dark text-light">
      <Container className="py-5 footer-text">
        <Row className="gy-5">
          <Col md={3}>
            <div>
              <img style={{ width: "90%" }} src={logoFooter} alt="logo"></img>
              <p className="py-4">
                After contacting us our medical personnel will assess your
                medical needs and assist with options that accommodate your
                medical concerns or requirements. You will be assessed by phone
                using your description of symptoms.
              </p>
              <Button variant="link" className="btn common-btn">
                Learn More
              </Button>
            </div>
          </Col>
          <Col md={3}>
            <h4 className="mb-4">Recent Posts</h4>
            <div className="d-flex">
              <div className="d-flex">
                <img
                  style={{ height: "70px", marginRight: "15px" }}
                  src={news1}
                  alt=""
                />
                <div>
                  <p
                    style={{
                      color: "#999",
                      fontSize: ".8rem",
                      marginBottom: "5px",
                    }}
                  >
                    21st December, 2021
                  </p>
                  <h6>Dental services is the best..</h6>
                </div>
              </div>
            </div>
            <div className="d-flex my-3">
              <div className="d-flex">
                <img
                  style={{ height: "70px", marginRight: "15px" }}
                  src={news2}
                  alt=""
                />
                <div>
                  <p
                    style={{
                      color: "#999",
                      fontSize: ".8rem",
                      marginBottom: "5px",
                    }}
                  >
                    3rd November, 2021
                  </p>
                  <h6>Check your stomach ASAP!</h6>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div className="d-flex">
                <img
                  style={{ height: "70px", marginRight: "15px" }}
                  src={news3}
                  alt=""
                />
                <div>
                  <p
                    style={{
                      color: "#999",
                      fontSize: ".8rem",
                      marginBottom: "5px",
                    }}
                  >
                    11st January, 2021
                  </p>
                  <h6>Keep your heart updated!</h6>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="footer-links">
              <div>
                <h4 className="mb-4">Quick Links</h4>
              </div>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/news">Latest News</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <div>
                <h4 className="mb-4">Contact Us</h4>
              </div>
              <div className="mb-3">
                <p>Address:</p>
                <p>Gulshan 1, Gulshan Avenue, Dhaka - 1210, Bangladesh</p>
              </div>
              <div className="mb-3">
                <p>Phone:</p>
                <p>+880193033**02</p>
              </div>
              <div className="mb-3">
                <p>Email:</p>
                <p>
                  <a href="mailto:gdmamun@yahoo.com">gdmamun@yahoo.com</a>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bg">
        <Container className="my-3">
          <Row>
            <Col className="d-flex justify-content-center my-3">
              <li>
                <Link to="/home">
                  <i className="fab fa-facebook-f px-3"></i>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="fab fa-twitter px-3"></i>
                </Link>
              </li>
              <li>
                <Link to="/home">
                  <i className="fab fa-linkedin-in px-3"></i>
                </Link>
              </li>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <p style={{ fontSize: "14px", color: "#999" }}>
                  Copyright by DeltaCare 2021. All rights reserved.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
