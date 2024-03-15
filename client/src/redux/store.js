import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from '@redux-devtools/extension';
const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from "./reducers/rootReducer";

// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// export default store;
