import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import UserPage from "./components/pages/UserPage";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/user" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
