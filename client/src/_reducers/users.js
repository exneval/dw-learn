import {
  GET_USERS,
  GET_USERS_PENDING,
  POST_USERS,
  POST_USERS_PENDING,
  UPDATE_USERS,
  UPDATE_USERS_PENDING
} from "../config/constants";

const initialState = {
  data: [],
  isLoading: false,
  isPost: false
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isPost: false
      };
    case GET_USERS_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case POST_USERS:
      return {
        ...state,
        data: state.data.concat(action.payload),
        isLoading: false,
        isPost: false
      };
    case POST_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    case UPDATE_USERS:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.index - 1),
          ...[action.payload.user],
          ...state.data.slice(action.payload.index - 1)
        ],
        isLoading: false,
        isPost: false
      };
    case UPDATE_USERS_PENDING:
      return {
        ...state,
        isLoading: true,
        isPost: true
      };
    default:
      return state;
  }
};
