import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { user, error, handleGoogleSignin } = useFirebase();
  const googleSignin = (e) => {
    e.preventDefault();
    handleGoogleSignin().then(() => {});
    console.log(user);
  };
  return (
    <div className="my-5">
      <div className="container">
        <Row className="d-flex justify-content-center py-5">
          <Col style={{ maxWidth: "400px" }}>
            <h3>Login</h3>
            <Form className="my-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="">Forgot your pasword?</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>
              <Button className="mb-2" variant="dark" type="submit">
                Login
              </Button>
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Text className="text-muted">Or</Form.Text>
              </Form.Group>
              <Button onClick={googleSignin} variant="primary" type="submit">
                Login with Google
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
