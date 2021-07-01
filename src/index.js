import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import routes from "./routes";
import rootReducer from "./Redux/Reducers";
import {
  signIn,
  signUp,
  loadUser,
  logout,
} from "./Redux/Actions/RegisterationActions";

// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));


render(
  <Provider store={store}>
    <Router>
      <routes />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
