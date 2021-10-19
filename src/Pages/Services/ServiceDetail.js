import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [singleService, setSingleService] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((result) => setSingleService(result));
  }, []);
  const service = singleService.find((item) => item.id === parseInt(serviceId));

  return (
    <div className="container">
      <div className="my-5 py-5">
        <Row className="gy-3 gy-sm-5">
          <Col xl={5} md={6}>
            <div>
              <img className="w-100 rounded" src={service?.img} alt="" />
            </div>
          </Col>
          <Col xl={7} md={6}>
            <div>
              <h1>{service?.name}</h1>
              <p>{service?.info}</p>
              <p>{service?.info}</p>
              <p>{service?.info}</p>
            </div>
            <Link to="/services">
              <Button variant="light" className="common-btn mt-4">
                Back to Services
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServiceDetail;
