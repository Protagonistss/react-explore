import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
// import { Provider } from "./page/react-redux/react-redux";
// import store from "./page/react-redux/reducer";
import store from "./page/router/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
