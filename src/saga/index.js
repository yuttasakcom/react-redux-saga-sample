import { takeEvery } from "redux-saga/effects";
import { USER } from "../constants/actionTypes";

import { fetchUsers } from "./user";

export function* watchUser() {
  yield takeEvery(USER.SAGA_FETCH_USERS, fetchUsers);
}
