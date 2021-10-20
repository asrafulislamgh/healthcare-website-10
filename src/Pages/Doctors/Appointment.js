import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Col,
  Container,
  Form,
  FormControl,
  Row,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router";
import "./Appointment.css";
import useAuth from "../../hooks/useAuth";

const Appointment = () => {
  const { apId } = useParams();
  const [doctors, setDoctors] = useState([]);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((result) => setDoctors(result));
  }, []);

  const selectedDoctor = doctors.find((doctor) => doctor.id === parseInt(apId));
  return (
    <div>
      <div className="appointment-container">
        <div className="container">
          <Row className="d-flex justify-content-center align-items-center">
            <Col xl={4} lg={4} md={5} sm={5} xs={8}>
              <div className="text-center mb-3 text-white">
                <img
                  className="doctor-img"
                  src={selectedDoctor?.doctorImg}
                  alt=""
                />
                <h2>{selectedDoctor?.name}</h2>
                <p>{selectedDoctor?.dept}</p>
              </div>
            </Col>
          </Row>
        </div>
        <div></div>
      </div>
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Appointment</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormControl
                {...register("name")}
                className="input-field mb-3"
                placeholder={user?.displayName}
                aria-label="name"
                value={user?.displayName}
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("email")}
                className="input-field mb-3"
                placeholder={user?.email}
                value={user?.email}
                aria-label="email"
                aria-describedby="basic-addon2"
              />
              <FormControl
                {...register("date")}
                className="input-field mb-3"
                name="meeting-time"
                // value="2021-10-07T00:00"
                min="2021-10-07T00:00"
                max="2022-06-14T00:00"
                aria-label="name"
                type="datetime-local"
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
                  {...register("detail")}
                  as="textarea"
                  rows={4}
                  className="input-field mb-3"
                  placeholder="Describe your problems"
                />
              </Form.Group>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="d-grid">
                <Button type="submit" className="btn btn-danger py-3">
                  Make an Appointment
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Appointment;
