import React, { useState } from "react";
import "./RegisterForm.css";
import { Alert } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import { shallowEqual } from "react-redux";

const RegisterForm = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [seconedPassword, setseconedPassword] = useState("");
  const [isPasswordValid, setisPasswordValid] = useState(false);
  const [isSeconedPasswordValid, setisSeconedPasswordValid] = useState(false);
  const [isEmailValid, setisEmailValid] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [showSeconedPassword, setshowSeconedPassword] = useState(false);
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [seconedPasswordError, setseconedPasswordError] = useState("");
  const [isFirstTime, setisFirstTime] = useState(
    props.isFirstTime ? props.isFirstTime : false
  );

  const validatePassword = (event) => {
    var pass = event.target.value;
    var pattern = new RegExp(/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/);
    var test = pattern.test(pass);
    if (test) {
      setpasswordError("");
      setisPasswordValid(true);
    } else {
      setpasswordError(
        "Password length must be at least 8 and at least one capital letter and one number."
      );
      setisPasswordValid(false);
    }
  };

  const validateSeconedPassword = (event) => {
    var pass = event.target.value;
    var pattern = new RegExp(/^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/);
    var test = pattern.test(pass);
    if (test) {
      if (pass === password) {
        setseconedPasswordError("");
        setisSeconedPasswordValid(true);
      } else {
        setseconedPasswordError("Seconed password must be the same.");
        setisSeconedPasswordValid(false);
      }
    } else {
      setseconedPasswordError(
        "Password length must be at least 8 and at least one capital letter and one number."
      );
      setisSeconedPasswordValid(false);
    }
  };

  const validateEmail = (event) => {
    var email = event.target.value;
    var pattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    var test = pattern.test(email);
    if (test) {
      setemailError("");

      setisEmailValid(true);
    } else {
      setemailError("Email is not valid.");
      setisEmailValid(false);
    }
  };

  const handleClickShowPassword = () => {
    setshowPassword(!showPassword);
  };
  const handleClickShowSeconedPassword = () => {
    setshowSeconedPassword(!showSeconedPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isEmailValid & isPasswordValid) {
      console.log("success");
      props.handelSubmit(email, password);
    } else {
      console.log("error");
    }
  };

  return (
    <form className="form">
      <Input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
        onInput={validateEmail}
      />
      {!isEmailValid && <Alert variant="danger">{emailError}</Alert>}
      {isEmailValid && <Alert variant="success">{"Email is good"}</Alert>}
      <Input
        className="input"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={password}
        security={showPassword}
        onChange={(e) => setpassword(e.target.value)}
        onInput={validatePassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />

      {!isPasswordValid && <Alert variant="danger">{passwordError}</Alert>}
      {isPasswordValid && <Alert variant="success">{"Password is good"}</Alert>}

      {isFirstTime && (
        <Input
          className="input"
          type={showSeconedPassword ? "text" : "password"}
          placeholder="Repeat password"
          value={seconedPassword}
          security={showSeconedPassword}
          onChange={(e) => setseconedPassword(e.target.value)}
          onInput={validateSeconedPassword}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowSeconedPassword}>
                {showSeconedPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      )}

      {isFirstTime && !isSeconedPasswordValid && (
        <Alert variant="danger">{seconedPasswordError}</Alert>
      )}
      {isFirstTime && isSeconedPasswordValid && (
        <Alert variant="success">{"Password is good"}</Alert>
      )}

      <button type="submit" className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
