import {Route, Switch} from "react-router-dom";
import DefaultLayout from "../shared/components/DefaultLayout";
import React from "react";

export const Rotas= () => (
  <Switch>
    <Route path="/" name="Home" component={DefaultLayout} />
  </Switch>
);
