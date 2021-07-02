import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../../Pages/HomePage/HomePage";
import SignInPage from "../../Pages/Registeration/SignIn/SignIn";
import SignUpPage from "../../Pages/Registeration/SignUp/SignUp";
import { logout } from "../../../Redux/Actions/RegisterationActions";

import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const handleLogout = (e) => {};
  return (
    <>
      <div className="NavBarContainer">
        <Link to="/" className="NavLogo">
          ZIGGIT
        </Link>

        <div className="NavMenu">
          <div className="NavItem">
            <Link className="NavLinks" to="/SignUp">
              SignUp
            </Link>
          </div>
          <div className="NavItem">
            <Link className="NavLinks" to="/SignIn">
              SignIn
            </Link>
          </div>
          <div className="NavItem">
            <Link className="NavLinks" onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("global state", state);
  return {
    ...state,
    errorMassage: state.auth.errorMassage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
