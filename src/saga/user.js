import { put } from "redux-saga/effects";
import { USER } from "../constants/actionTypes";
import axios from "axios";

export function* fetchUsers() {
  const res = yield axios.get("https://jsonplaceholder.typicode.com/users");
  yield put({ type: USER.REDUCER_SET_USERS, payload: res.data });
}
