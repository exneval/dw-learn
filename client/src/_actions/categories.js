import { GET_CATEGORIES } from "../config/constants";

import axios from "axios";

export const getCategories = () => {
  return {
    type: GET_CATEGORIES,
    payload: axios({
      method: "GET",
      url: "http://192.168.1.7:5000/api/v1/categories"
    })
  };
};
