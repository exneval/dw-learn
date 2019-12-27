import { GET_USERS, POST_USER, UPDATE_USER } from "../config/constants";

const initialState = {
  data: [],
  isLoading: false,
  isPost: false,
  error: false
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_USERS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_USERS}_FULFILLED`:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isPost: false
      };
    case `${GET_USERS}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${POST_USER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${POST_USER}_FULFILLED`:
      return {
        ...state,
        data: state.data.concat(action.payload.data),
        isLoading: false,
        isPost: false
      };
    case `${POST_USER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    case `${UPDATE_USER}_PENDING`:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case `${UPDATE_USER}_FULFILLED`:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.config.params.index - 1),
          ...[action.payload.data],
          ...state.data.slice(action.payload.config.params.index)
        ],
        isLoading: false,
        isPost: false
      };
    case `${UPDATE_USER}_REJECTED`:
      return {
        ...state,
        error: true,
        isLoading: false
      };
    default:
      return state;
  }
};
