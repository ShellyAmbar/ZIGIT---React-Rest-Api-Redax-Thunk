import React, { useState } from "react";
import "./RegisterForm.css";

const RegisterForm = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <form className="form">
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
