import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Doctor from "./Doctor";
import "./Doctor.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((result) => setDoctors(result));
  }, []);
  return (
    <div className=" py-5">
      <h1 className="text-center my-5">Our Doctors</h1>
      <Row lg={4} md={3} sm={2} xs={1} className="gy-5">
        {doctors.map((doctor) => (
          <Col>
            <Doctor doctor={doctor}></Doctor>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Doctors;
