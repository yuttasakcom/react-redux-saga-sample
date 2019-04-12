import { put, takeEvery } from "redux-saga/effects";
import { USER } from "../constants/actionTypes";
import axios from "axios";

function* fetchUsers() {
  const res = yield axios.get("https://jsonplaceholder.typicode.com/users");
  yield put({ type: USER.REDUCER_SET_USERS, payload: res.data });
}

export function* watchUser() {
  yield takeEvery(USER.SAGA_FETCH_USERS, fetchUsers);
}
