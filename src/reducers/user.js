import { USER } from "../constants/actionTypes";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER.REDUCER_SET_USERS:
      return action.payload;
    default:
      return state;
  }
};
