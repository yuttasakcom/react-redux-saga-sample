import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { userReducer } from "../reducers/user";
import rootSaga from "../sagas";

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

sagaMiddleware.run(rootSaga);

export default store;
