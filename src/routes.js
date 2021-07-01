import React from "react";
import HomePage from "./Components/Pages/HomePage/HomePage";
import SignInPage from "./Components/Pages/Registeration/SignIn/SignIn";
import SignUpPage from "./Components/Pages/Registeration/SignUp/SignUp";
import { Switch, Route } from "react-router-dom";

const routes = () => {
  return (
    <Switch>
      <Route path="/SignUp">
        <SignUpPage />
      </Route>
      <Route path="/SignIn">
        <SignInPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
};

export default routes;
