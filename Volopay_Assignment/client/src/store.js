import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import { getAllDatasReducer } from "./reducers/dataReducers";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

const finalReducer = combineReducers({
  getAllDatasReducer: getAllDatasReducer, // key value will be the same.
});

const initialState = {};

// composeEnhancers with the help od dev tools here.
const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
