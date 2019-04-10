import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import { userReducer } from "./user/reducer";

const reducers = combineReducers({
  users: userReducer,
});

const logger = createLogger();

const middleware = [logger, thunk];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
