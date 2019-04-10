import axios from "axios";

export const setUsers = () => async dispatch => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  dispatch({
    type: "SET_USERS",
    payload: data,
  });
};
