import React from "react";
import { Col, Row } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center my-5">About us</h1>

        <Row xs={1} sm={1} md={1} lg={2} className="gy-5">
          <Col>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt=""
            />
          </Col>
          <Col>
            <h3>Who we are?</h3>
            <p>
              A hospital is a health care institution providing patient
              treatment with specialized medical and nursing staff and medical
              equipment.[1] The best-known type of hospital is the general
              hospital, which typically has an emergency department to treat
              urgent health problems ranging from fire and accident victims to a
              sudden illness. Specialized hospitals can help reduce health care
              costs compared to general hospitals.[2] Hospitals are classified
              as general, specialty, or government depending on the sources of
              income received.
            </p>
            <h3 className="mt-5">What we do?</h3>
            <p>
              A district hospital typically is the major health care facility in
              its region, with many beds for intensive care and additional beds
              for patients who need long-term care. Specialized hospitals
              include trauma centers, rehabilitation hospitals, children's
              hospitals, seniors' (geriatric) hospitals, and hospitals for
              dealing with specific medical needs such as psychiatric treatment
              (see psychiatric hospital) and certain disease categories.
            </p>
            <h3 className="mt-5">How we do?</h3>
            <p>
              Some hospitals have outpatient departments and some have chronic
              treatment units. Common support units include a pharmacy,
              pathology, and radiology. Hospitals are typically funded by public
              funding, health organisations (for-profit or nonprofit), health
              insurance companies, or charities, including direct charitable
              donations. Historically, hospitals were often founded and funded
              by religious orders, or by charitable individuals and leaders.[3]
            </p>
          </Col>
        </Row>

        <Row xs={1} sm={1} md={1} lg={2} className="gy-5 my-5">
          <Col>
            <h3>Why you should come to us?</h3>
            <p>
              A hospital is a health care institution providing patient
              treatment with specialized medical and nursing staff and medical
              equipment.[1] The best-known type of hospital is the general
              hospital, which typically has an emergency department to treat
              urgent health problems ranging from fire and accident victims to a
              sudden illness. Specialized hospitals can help reduce health care
              costs compared to general hospitals.[2] Hospitals are classified
              as general, specialty, or government depending on the sources of
              income received.
            </p>
            <h3 className="mt-5">What made us special?</h3>
            <p>
              A district hospital typically is the major health care facility in
              its region, with many beds for intensive care and additional beds
              for patients who need long-term care. Specialized hospitals
              include trauma centers, rehabilitation hospitals, children's
              hospitals, seniors' (geriatric) hospitals, and hospitals for
              dealing with specific medical needs such as psychiatric treatment
              (see psychiatric hospital) and certain disease categories.
            </p>
            <h3 className="mt-5">What our patients say?</h3>
            <p>
              Some hospitals have outpatient departments and some have chronic
              treatment units. Common support units include a pharmacy,
              pathology, and radiology. Hospitals are typically funded by public
              funding, health organisations (for-profit or nonprofit), health
              insurance companies, or charities, including direct charitable
              donations. Historically, hospitals were often founded and funded
              by religious orders, or by charitable individuals and leaders.[3]
            </p>
          </Col>
          <Col>
            <img
              className="w-100"
              src="https://images.unsplash.com/photo-1580281657702-257584239a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=386&q=80"
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
