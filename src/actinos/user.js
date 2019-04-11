import axios from "axios";
import { USER } from "../constants/actionTypes";

export const setUsers = () => async dispatch => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  dispatch({
    type: USER.SET_USERS,
    payload: data,
  });
};
