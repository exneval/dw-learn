import { GET_USERS, GET_USERS_PENDING } from "../config/constants";

export const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

export const getUsersPending = users => {
  return {
    type: GET_USERS_PENDING
  };
};
