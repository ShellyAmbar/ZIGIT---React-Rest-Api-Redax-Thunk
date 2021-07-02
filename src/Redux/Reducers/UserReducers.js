import {
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_ERROR,
} from "../Actions/Types";

const defaultState = {
  projects: [],
  errorMeassage: "",
};

const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        errorMeassage: "",
      };
    case FETCH_USER_DATA_ERROR:
      return {
        ...state,
        projects: [],
        errorMeassage: action.payload,
      };

    default:
      return state;
  }
};

export default UserReducer;
