import { USER } from "../constants/actionTypes";

export const fetchUsers = () => ({ type: USER.SAGA_FETCH_USERS });

export const setUser = () => ({ type: "SET_USER" });
