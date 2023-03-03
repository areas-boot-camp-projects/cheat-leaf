import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./middleware/RouteGuard"
 

import { history } from './helpers/history';
 

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
 
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <RouteGuard
                   exact
                   path="/"
                   component={HomePage}
               />
               <Route
                   path="/login"
                   component={LoginPage}
               />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes