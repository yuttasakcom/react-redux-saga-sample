import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { userReducer } from "../reducers/user";
import { watchUser } from "../saga";

const reducers = combineReducers({
  users: userReducer,
});

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const middleware = [logger, thunk, sagaMiddleware];

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const store = createStore(reducers, enhancer);

sagaMiddleware.run(watchUser);

export default store;
