import React from "react";
import { Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Login from "../views/Login";
import Home from "../views/Home";
import MovieDetails from "../views/MovieDetails";

export default function Routes() {
  return (
    <Switch>
      <PrivateRoute component={Login} exact path="/" />
      <PrivateRoute component={Home} exact path="/home" isClosed />
      <PrivateRoute
        component={MovieDetails}
        exact
        path="/details/:id"
        isClosed
      />
    </Switch>
  );
}
