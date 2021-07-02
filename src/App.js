import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./Components/CustomViews/NavBar/NavBar";
import "./App.css";
import Routes from "./Routes";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}
