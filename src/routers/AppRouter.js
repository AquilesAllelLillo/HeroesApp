import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login" component={LoginScreen}>
            {/* <About /> */}
          </Route>
          <Route path="/" component={DashboardRoutes}>
            {/* <Users /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
