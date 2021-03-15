import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { getUsers } from "./services/userListService";
import { UserListProvider } from "./components/userListContext/userListContext";
import store from "./store";
import "./index.css";
import App from "./App";

// const userListService = new UserListService();

ReactDOM.render(
  <Provider store={store}>
    <UserListProvider value={getUsers}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </UserListProvider>
  </Provider>,
  document.getElementById("root")
);
