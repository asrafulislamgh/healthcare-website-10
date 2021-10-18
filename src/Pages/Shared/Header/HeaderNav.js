import React from "react";
import "./HeaderNav.css";
import logo from "../../../img/logo1.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";

const HeaderNav = () => {
  return (
    <div>
      <HeaderTop></HeaderTop>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
        className="text-center"
      >
        <Container className="py-2">
          <Navbar.Brand as={Link} to="/home">
            <img
              style={{ maxHeight: "50px", width: "100%" }}
              src={logo}
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto header-nav ms-lg-5">
              <Nav.Link className="nav-item" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="">
                About Us
              </Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="">
                Services
              </Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="">
                Shop
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Name</Nav.Link>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
