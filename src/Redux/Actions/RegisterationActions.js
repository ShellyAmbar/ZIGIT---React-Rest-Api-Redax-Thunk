import axios from "axios";
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "./Types";

const BASE_URL =
  "https://private-052d6-testapi4528.apiary-mock.com/authenticate";

function setLoginSuccess(data) {
  return {
    type: SIGN_IN_SUCCESS,
  };
}

function setLoginError(error) {
  return {
    type: SIGN_IN_ERROR,
  };
}

function setSignupSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

function setSignupError() {
  return {
    type: SIGN_UP_ERROR,
  };
}

function setLogoutSuccess() {
  return {
    type: SIGN_UP_SUCCESS,
  };
}

function setLogoutError() {
  return {
    type: SIGN_UP_ERROR,
  };
}

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
        console.log(response, "   Response current weather");
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw new Error("Something went wrong in fetching current weather");
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
          payload: "Failed to get the current weather.",
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
        console.log(response, "   Response current weather");
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw new Error("Something went wrong in fetching current weather");
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
          payload: "Failed to get the current weather.",
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
        console.log(response, "   Response current weather");
        if (response.status === 200 && response.ok === true) {
          return response.json();
        } else {
          throw new Error("Something went wrong in fetching current weather");
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
          payload: "Failed to get the current weather.",
        });
      });
  };
};
