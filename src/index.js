import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import { getUsers } from "./services/userListService";
import { UserListProvider } from "./components/userListContext/userListContext";
import store from "./store";
import "./index.css";
import App from "./App";


ReactDOM.render(
  <Provider store={store}>
    <UserListProvider value={getUsers}>
      <HashRouter >
        <App />
      </HashRouter>
    </UserListProvider>
  </Provider>,
  document.getElementById("root")
);
