import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
//import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import RegisterForm from "../../../CustomViews/RegisterForm/RegisterForm";
import "./SignIn.css";
import { connect } from "react-redux";
import { signIn } from "../../../../Redux/Actions/RegisterationActions";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  // const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handelSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      //await login(emailRef.current.value, passwordRef.current.value);
      //  console.log(currentUser);
      setSuccess("Login with success!");
      // setStatus("Log Out");
      history.push("/");
    } catch {
      setError("Failed to login");
      setSuccess("");
    }
    setLoading(false);
  }

  return (
    <>
      <Container className="container">
        {/* <RegisterForm /> */}
        <Card className="w-100" style={{ maxWidth: "400px" }}>
          <Card.Body>
            <h2 className="text-center mb-4">Login</h2>
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

              <Button
                style={{ backgroundColor: "rgba(73,63,252,1)" }}
                disabled={loading}
                className="w-100"
                type="submit"
              >
                Log In
              </Button>
            </Form>
            <div className="w-100 mt-2 text-center">
              Don't have an account? <Link to="/SignUp">Sign UP</Link>.
            </div>
            <div className="w-100 mt-2 text-center">
              <Link to="/ResetPassword">Forgot password?</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("global state", state);
  return {
    userData: state.auth.personalDetailes,
    errorMassage: state.auth.errorMassage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(signIn(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
