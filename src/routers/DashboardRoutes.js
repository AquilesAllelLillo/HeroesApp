import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../components/ui/Navbar";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { SearchScreen } from "../components/search/SearchScreen";

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
          <Route exact path="/hero/:heroeId" component={HeroScreen}>
            {/* <About /> */}
          </Route>
          <Route exact path="/search" component={SearchScreen}>
            {/* <About /> */}
          </Route>

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};
