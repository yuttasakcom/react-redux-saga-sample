import { USER } from "../constants/actionTypes";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case USER.REDUCER_SET_USERS:
      return action.payload;
    case "SET_USER":
      return [...state, { id: 999, name: "YoYea" }];
    default:
      return state;
  }
};
