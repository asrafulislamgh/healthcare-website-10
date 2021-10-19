import React from "react";
import "./HeaderNav.css";
import logo from "../../../img/logo1.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import useFirebase from "../../../hooks/useFirebase";

const HeaderNav = () => {
  const { user, logOut } = useFirebase();
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
              <Nav.Link className="nav-item" as={Link} to="/aboutus">
                About Us
              </Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="nav-item" as={Link} to="">
                Shop
              </Nav.Link>
            </Nav>
            {user.photoURL && (
              <Nav.Link>
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                  src={user.photoURL}
                  alt="user"
                />
              </Nav.Link>
            )}
            <Nav>
              {user.displayName && <Nav.Link>{user.displayName}</Nav.Link>}

              {/* Logout */}

              {user.email ? (
                <Nav.Link onClick={logOut}>Logout</Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNav;
