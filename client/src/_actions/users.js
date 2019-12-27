import { GET_USERS, POST_USER, UPDATE_USER } from "../config/constants";
import axios from "axios";

export const getUsers = () => {
  return {
    type: GET_USERS,
    payload: axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/users"
    })
  };
};

export const addUser = user => {
  return {
    type: POST_USER,
    payload: axios({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/users",
      data: user
    })
  };
};

export const updateUser = (user, index) => {
  return {
    type: UPDATE_USER,
    payload: axios({
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/users/${index}`,
      params: {
        index
      },
      data: user
    })
  };
};
