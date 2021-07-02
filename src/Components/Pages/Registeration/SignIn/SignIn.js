import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, Container } from "react-bootstrap";
//import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import RegisterForm from "../../../CustomViews/RegisterForm/RegisterForm";
import "./SignIn.css";
import { connect } from "react-redux";
import { login } from "../../../../Redux/Actions/RegisterationActions";

function SignIn(props) {
  const history = useHistory();

  // const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handelSubmit(email, password) {
    // e.preventDefault();

    try {
      setLoading(true);
      setError("");
      props.login(email, password);
      console.log("data: ", props.personalDetailes);
      if (props.personalDetailes) {
        setSuccess("Login with success!");
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
        <h1>SignIn</h1>
        <RegisterForm handelSubmit={handelSubmit} isFirstTime={false} />
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
    login: (email, password) => dispatch(login(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
