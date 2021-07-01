import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT_SUCCESS,
} from "../Actions/Types";

const defaultState = {
  token: "",
  personalDetailes: null,
  errorMeassage: "",
  isAuthenticated: false,
};

const RegisterationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        personalDetailes: action.payload,
        isAuthenticated: true,
        errorMeassage: "",
      };
    case SIGN_IN_ERROR:
    case SIGN_UP_ERROR:
    case LOGOUT_SUCCESS:
      return {
        ...state,
        token: null,
        personalDetailes: null,
        isAuthenticated: false,
        errorMeassage: action.payload,
      };

    default:
      return state;
  }
};

export default RegisterationReducer;
