import { GET_ERRORS, CLEAR_ERRORS } from "../Actions/Types";

const initialState = {
  msg: {},
  status: null,
  id: null,
};
const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.paylopad.msg,
        status: action.paylopad.status,
        id: action.paylopad.id,
      };
    case CLEAR_ERRORS:
      return {
        msg: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default ErrorReducer;
