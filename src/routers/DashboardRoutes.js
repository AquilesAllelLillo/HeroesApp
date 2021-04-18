import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container mt2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen}>
            {/* <About /> */}
          </Route>
          <Route exact path="/dc" component={DcScreen}>
            {/* <Users /> */}
          </Route>
          <Route exact path="/heroe/:heroeId" component={HeroScreen}>
            {/* <About /> */}
          </Route>

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
