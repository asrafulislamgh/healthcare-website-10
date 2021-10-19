import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";

const NewsSingle = ({ nws }) => {
  const { name, img, info, date } = nws;
  return (
    <div>
      <CardGroup>
        <Card className="card-container1">
          <Card.Img variant="top" src={img} />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{name}</Card.Title>
            <Card.Text className="card-info">{info}</Card.Text>
          </Card.Body>
          <Card.Text className="card-info card-body">{date}</Card.Text>
          <Card.Footer className="card-body">
            <Button variant="light" className="common-btn2">
              Read More
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default NewsSingle;
