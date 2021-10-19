import { FormControl, InputGroup } from "react-bootstrap";
import React from "react";
import "./Newletter.css";

const Newsletter = () => {
  return (
    <div className="py-5">
      <div className="text-center newsletter my-5">
        <h1 className="doctor-heading">
          <span>Do you Want to be updated?</span> <br /> Join Now
        </h1>
        <div>
          <InputGroup size="lg" className="my-4">
            <FormControl
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Email address"
            />
            <InputGroup.Text className="btn-danger" id="inputGroup-sizing-lg">
              Subscribe
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
