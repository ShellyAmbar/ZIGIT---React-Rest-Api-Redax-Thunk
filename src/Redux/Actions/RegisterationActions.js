import axios from "axios";
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
} from "./Types";

const BASE_URL =
  "https://private-052d6-testapi4528.apiary-mock.com/authenticate";

export const login = (email, password) => {
  return (dispatch) => {
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response, "Response login");
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((JSONres) => {
        console.log(JSONres);
        //dispatch the action
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: JSONres,
        });
      })
      .catch((err) => {
        dispatch({
          type: SIGN_IN_ERROR,
          payload: "Failed",
        });
      });
  };
};

export const signUp = (email, password) => {
  return (dispatch) => {
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response, "Response signup");
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((JSONres) => {
        console.log(JSONres);
        //dispatch the action
        dispatch({
          type: SIGN_UP_SUCCESS,
          payload: JSONres,
        });
      })
      .catch((err) => {
        dispatch({
          type: SIGN_UP_ERROR,
          payload: "Failed.",
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response, "");
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((JSONres) => {
        console.log(JSONres);
        //dispatch the action
        dispatch({
          type: LOGOUT_SUCCESS,
          payload: JSONres,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_ERROR,
          payload: "Failed.",
        });
      });
  };
};
