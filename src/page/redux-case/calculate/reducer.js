import { createStore } from "redux";

function calculateReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + action.input;
  }
}

const store = createStore(calculateReducer);
export default store;
