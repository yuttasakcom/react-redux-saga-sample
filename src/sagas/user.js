import { put, takeEvery, call } from "redux-saga/effects";
import { USER } from "../constants/actionTypes";
import axios from "axios";

function* fetchUsers() {
  const { data: users } = yield call(
    [axios, axios.get],
    "https://jsonplaceholder.typicode.com/users"
  );
  yield put({ type: USER.REDUCER_SET_USERS, payload: users });
}

export function* watchUser() {
  yield takeEvery(USER.SAGA_FETCH_USERS, fetchUsers);
}
