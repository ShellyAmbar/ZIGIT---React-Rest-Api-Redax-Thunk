import axios from "axios";
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT_ERROR,
  LOGOUT_SUCCESS,
} from "./Types";

const BASE_URL = "https://private-052d6-testapi4528.apiary-mock.com/info";

export const getUserProjects = () => {
  return (dispatch) => {
    fetch(BASE_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response, "response projects");
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
          payload: "Failed.",
        });
      });
  };
};
