import React, { useRef, useState } from "react";

import { Form, Card, Button, Alert, Container } from "react-bootstrap";
//import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import RegisterForm from "../../../CustomViews/RegisterForm/RegisterForm";
import { signUp } from "../../../../Redux/Actions/RegisterationActions";

import "./SignUp.css";

function SignUp(props) {
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
      props.signup(email, password);

      if (props.personalDetailes) {
        console.log("personalDetailes", props.personalDetailes);
        setSuccess("signup with success!");
        history.push("/info");
      }
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
    ...state,
    personalDetailes: state.auth.personalDetailes,
    errorMassage: state.auth.errorMassage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (email, password) => dispatch(signUp(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
