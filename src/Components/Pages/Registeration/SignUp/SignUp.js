import React, { useRef, useState } from "react";

import { Form, Card, Button, Alert, Container } from "react-bootstrap";
//import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import "./SignUp.css";

function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  //const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const history = useHistory();

  async function handelSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError("Passwords must be matched");
    }
    if (!emailRef.current.value.contains("@")) {
      return setError("Email must be valid");
    }
    try {
      setLoading(true);
      setError("");
      // await signup(emailRef.current.value, passwordRef.current.value);
      setSuccess("SignUp with success!");
      history.push("/LogIn");
    } catch {
      setError("Failed to signup");
      setSuccess("");
    }
    setLoading(false);
  }

  return (
    <>
      <Container className="container">
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handelSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" required ref={emailRef} />
              </Form.Group>

              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required ref={passwordRef} />
              </Form.Group>

              <Form.Group id="password-confirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  required
                  ref={passwordConfirmationRef}
                />
              </Form.Group>

              <Button
                style={{ backgroundColor: "rgba(73,63,252,1)" }}
                disabled={loading}
                className="w-100"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
            <div className="w-100 mt-2 text-center">
              Already have an account? <Link to="/LogIn">Login</Link>.
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default SignUp;
