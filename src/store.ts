import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { signup } from "./app/reducers/signup";
import { article } from "./app/reducers/article";

const baseReducer = combineReducers({ signup, article });

export const store = createStore(
  baseReducer,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);
