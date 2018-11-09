import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const baseReducer = combineReducers({});

export const store = createStore(baseReducer, compose(applyMiddleware(thunk)));
