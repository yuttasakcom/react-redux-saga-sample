import { all, fork, take } from "redux-saga/effects";

import { watchUser } from "./user";

function* setUser() {
  console.log("SET_USER");
  const user = yield take("SET_USER");
  console.log("SET_USER", user);
}

export default function* root() {
  yield all([fork(setUser), fork(watchUser)]);
}
