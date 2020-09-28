// import { applyMiddleware, createStore } from "redux";
import { createStore, applyMiddleware } from "./redux";

// import thunk from "redux-thunk";
// import logger from "redux-logger";
import { logger } from "../middlewares/logger";
import { thunk } from "../middlewares/thunk";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer, applyMiddleware(thunk, logger));

export default store;
