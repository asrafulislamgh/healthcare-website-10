import React from "react";
import {
  Col,
  Container,
  FormControl,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
const Login = () => {
  const {
    handleGoogleSignin,
    setIsLoading,
    error,
    handleEmailChanging,
    handleLogin,
    handlePasswordChanging,
    handlePasswordReset,
  } = useFirebase();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";

  const googleSignin = () => {
    handleGoogleSignin().then(() => {
      history.push(redirect_url);
      setIsLoading(false);
    });
  };

  return (
    <div>
      <Container className="justify-content-center my-5">
        <Row className="d-flex justify-content-center text-center">
          <Col style={{ maxWidth: "400px" }}>
            <h3 className="py-3">Login</h3>

            <Form onSubmit={handleLogin}>
              <FormControl
                type="email"
                onBlur={handleEmailChanging}
                className="input-field mb-3"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon2"
                required
              />
              <FormControl
                type="password"
                onBlur={handlePasswordChanging}
                className="input-field mb-3"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon2"
              />

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Text className="text-danger">{error}</Form.Text>
              </Form.Group>
              <div className="d-grid">
                <Button type="submit" className="btn btn-danger py-3">
                  Login
                </Button>
              </div>

              <div className="py-2">
                <small onClick={handlePasswordReset}>
                  <Button variant="link">Reset Password?</Button>
                </small>
              </div>
              <div className="py-2">
                Create a new account?
                <Link className="" to="/signup">
                  <u>
                    <em>Sign Up</em>
                  </u>
                </Link>
              </div>
              <div className="py-2">Or</div>

              <div className="d-grid">
                <Button onClick={googleSignin} className="btn btn-primary py-3">
                  With Google
                </Button>
                {/* <Button className="btn btn-dark text-white py-3">Github</Button>
                <Button className="btn btn-primary py-3">Facebook</Button> */}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
