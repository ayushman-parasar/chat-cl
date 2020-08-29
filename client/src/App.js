import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Testing from "./components/Testing";

import axios from "axios";
import List from "./components/List";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route exact path="/test">
          <Testing />
        </Route>
      </Switch>
    );
  }
}

export default App;
