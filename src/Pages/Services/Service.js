import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, info, img } = service;
  return (
    <CardGroup>
      <Card className="card-container">
        <Card.Img variant="top" src={img} />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Text className="card-info">{info}</Card.Text>
        </Card.Body>
        <Card.Footer className="card-body">
          <Button variant="light" className="common-btn">
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default Service;
