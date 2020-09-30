import { combineReducers, createStore } from "redux";

const userInfo = {
  isLogin: false,
  user: {
    name: null,
  },
};

function loginStatusReducer(state = { ...userInfo }, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        isLogin: true,
        user: { name: "test" },
      };
    case "LOGOUT_SUCCESS":
      return {
        isLogin: false,
        user: {
          name: null,
        },
      };
    default:
      return state;
  }
}

const store = createStore(combineReducers({ user: loginStatusReducer }));

export default store;
