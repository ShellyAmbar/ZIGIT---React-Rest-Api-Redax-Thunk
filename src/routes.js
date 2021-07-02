import React from "react";
import HomePage from "./Components/Pages/HomePage/HomePage";
import SignInPage from "./Components/Pages/Registeration/SignIn/SignIn";
import SignUpPage from "./Components/Pages/Registeration/SignUp/SignUp";
import ProfilePage from "./Components/Pages/ProfilePage/ProfilePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route path="/SignUp">
        <SignUpPage />
      </Route>
      <Route path="/SignIn">
        <SignInPage />
      </Route>
      <Route path="/Profile">
        <ProfilePage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default Routes;
