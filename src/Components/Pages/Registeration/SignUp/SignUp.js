import React, { useRef, useState } from "react";

import { Form, Card, Button, Alert, Container } from "react-bootstrap";
//import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import RegisterForm from "../../../CustomViews/RegisterForm/RegisterForm";
import { signUp } from "../../../../Redux/Actions/RegisterationActions";

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

  async function handelSubmit(email, password) {
    // e.preventDefault();
    console.log("handle sign up");
    try {
      setLoading(true);
      setError("");
      await this.props.signup(email, password);

      setSuccess("Login with success!");

      history.push("/Profile");
    } catch {
      setError("Failed to login");
      setSuccess("");
    }
    setLoading(false);
  }

  return (
    <>
      <Container className="container">
        <h1>SignUp</h1>
        <RegisterForm handelSubmit={handelSubmit} isFirstTime={true} />
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
    signup: (email, password) => dispatch(signUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
