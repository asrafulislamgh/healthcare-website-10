import React from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  FormControl,
} from "react-bootstrap";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import "./Contact.css";
import useAuth from "../../hooks/useAuth";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="container my-5">
        {/* <div className="contact">
          <h1 className="mb-5">Contact Us</h1>
          <p>Email: gdmamun@yahoo.com</p>
          <p>Phone: 01930336602</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Query</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="light" className="common-btn px-5">
              Send
            </Button>
          </Form>
        </div> */}

        <Container className="justify-content-center my-5">
          <Row className="d-flex justify-content-center text-center">
            <Col style={{ maxWidth: "400px" }}>
              <h3 className="py-3">Our Information</h3>
              <Form className="mb-3">
                <Form.Label>Email Address:</Form.Label>
                <br />
                <Form.Label>
                  <h5>gdmamun@yahoo.com</h5>
                </Form.Label>
                <br />
                <Form.Label>Phone Number:</Form.Label>
                <br />
                <Form.Label>
                  <h5>+880 1930-336602</h5>
                </Form.Label>
              </Form>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center text-center">
            <Col style={{ maxWidth: "400px" }}>
              <h3 className="py-3">Contact Us</h3>
              <Form>
                <FormControl
                  onBlur=""
                  className="input-field mb-3"
                  placeholder="Your Name"
                  aria-label="name"
                  value={user?.displayName}
                  aria-describedby="basic-addon2"
                />
                <FormControl
                  className="input-field mb-3"
                  onBlur=""
                  placeholder={user?.email}
                  value={user?.email}
                  aria-label="email"
                  aria-describedby="basic-addon2"
                />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Text className="text-danger"></Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={4}
                    className="input-field mb-3"
                    placeholder="Your queries"
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button type="submit" className="btn btn-danger py-3">
                    Submit
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <LoadScript googleMapsApiKey="AIzaSyBKDYjyvsePCWxjIj6Egexb6YN4KBPYY9M">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default React.memo(Contact);
