import {
  GET_USERS,
  GET_USERS_PENDING,
  POST_USERS,
  POST_USERS_PENDING,
  UPDATE_USERS,
  UPDATE_USERS_PENDING
} from "../config/constants";

export const getUsers = users => {
  return {
    type: GET_USERS,
    payload: users
  };
};

export const getUsersPending = () => {
  return {
    type: GET_USERS_PENDING
  };
};

export const addUser = user => {
  return {
    type: POST_USERS,
    payload: user
  };
};

export const addUserPending = () => {
  return {
    type: POST_USERS_PENDING
  };
};

export const updateUser = (user, index) => {
  return {
    type: UPDATE_USERS,
    payload: {
      user,
      index
    }
  };
};

export const updateUserPending = () => {
  return {
    type: UPDATE_USERS_PENDING
  };
};
