import React from "react";
import { Form, Button } from "react-bootstrap";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import "./Contact.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="contact">
          <h1 className="mb-5">Contact Us</h1>
          <p>Email: gdmamun@yahoo.com</p>
          <p>Phone: 01930336602</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
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
        </div>
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
