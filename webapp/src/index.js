import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/styles/common.scss";
import { Provider } from "react-redux";
import store from "./useCases/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
