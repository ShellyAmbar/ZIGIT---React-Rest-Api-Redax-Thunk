import axios from "axios";
import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_ERROR } from "./Types";

const BASE_URL = "https://private-052d6-testapi4528.apiary-mock.com/info";

export const getUserProjects = () => {
  return (dispatch) => {
    fetch(BASE_URL, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response, "response projects");
        if (
          (response.status === 200 || response.status === 201) &&
          response.ok === true
        ) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((JSONres) => {
        console.log(JSONres);
        //dispatch the action
        dispatch({
          type: FETCH_USER_DATA_SUCCESS,
          payload: JSONres,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_USER_DATA_ERROR,
          payload: "Failed.",
        });
      });
  };
};
