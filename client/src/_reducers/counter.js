import { INCREMENT, DECREMENT } from "../config/constants";

//Setup Reducer Redux
const initialState = {
  number: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        number: action.payload + 1
      };
    case DECREMENT:
      return {
        number: action.payload - 1
      };
    default:
      return state;
  }
};
