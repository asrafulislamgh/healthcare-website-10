import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((result) => setServices(result));
  }, []);
  return (
    <div>
      <Container className="text-center my-5">
        <h1 className="my-5 pt-5">Our Services</h1>
        <Row md={3} lg={4} sm={2} className="gy-4">
          {services.map((service) => (
            <Col key={service.name}>
              <Service service={service}></Service>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
