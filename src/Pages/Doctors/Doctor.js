import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "react-rating";

const Doctor = ({ doctor }) => {
  const { dept, name, doctorImg, rating } = doctor;
  return (
    <div>
      <Card className="text-center">
        <div className="img-container">
          <Card.Img variant="top" className="doctor-img" src={doctorImg} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{dept}</Card.Text>
          <Card.Text>
            <Rating
              className="rating"
              initialRating={rating}
              emptySymbol="fa fa-star-o fa-2x"
              fullSymbol="fa fa-star fa-2x"
              readonly
            />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="light" className="common-btn">
            Make an Appointment
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Doctor;