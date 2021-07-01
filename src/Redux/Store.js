import thunk from "redux-thunk";
import { applyMiddleware, createStore, combineReducers } from "redux";
import { UserReducers, RegisterationReducers, ErrorReducers } from "./Reducers";

//-- middleware
const middleware = applyMiddleware(thunk);
//-- store
const rootReducer = combineReducers({
  user: UserReducers,
  auth: RegisterationReducers,
  error: ErrorReducers,
});

const Store = createStore(rootReducer, middleware);

export default Store;
