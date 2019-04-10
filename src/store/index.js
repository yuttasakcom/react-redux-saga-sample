import { createStore, combineReducers } from "redux";

import { userReducer } from "./user/reducer";

const reducers = combineReducers({
  users: userReducer,
});

const store = createStore(reducers);

export default store;
