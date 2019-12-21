import { INCREMENT, DECREMENT } from "../config/constants";

//Setup Action Redux INC
export const actionINC = number => {
  return {
    type: INCREMENT,
    payload: number
  };
};

//Setup Action Redux DEC
export const actionDEC = number => {
  return {
    type: DECREMENT,
    payload: number
  };
};
