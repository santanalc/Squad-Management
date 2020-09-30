import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Edit from "../views/Edit/Edit";
import Panel from "../views/Panel/Panel";

function BaseRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Panel />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default BaseRouter;
