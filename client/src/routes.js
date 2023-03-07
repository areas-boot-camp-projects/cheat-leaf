import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./components/RouteGuard"
 

import { history } from './helpers/history';
 

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
 
function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <RouteGuard
                   exact
                   path="./components/RouteGuard"
                   component={HomePage}
               />
               <Route
                   path="./pages/Login"
                   component={LoginPage}
               />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes