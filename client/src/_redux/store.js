import { createStore, combineReducers, applyMiddleware } from "redux";

import { counter } from "../_reducers/counter";
import { users } from "../_reducers/users";

import { promise, logger } from "../middleware";

//Get All reducers available
//Global State come from here
const reducers = combineReducers({
  counter,
  users
});

//Setup Store Redux
const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
