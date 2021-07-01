import axios from "axios";
import { CLEAR_ERRORS, GET_ERRORS } from "./Types";

//check token and load user

export const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
