import React from "react";
import MainHome from "./Main/MainHome.js";
import Login from "./Main/Login.js";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import MainGood from "./Main/MainGood.js";

export default function Components () {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={MainGood} />
        <Route path="/user/:username" component={MainGood} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}