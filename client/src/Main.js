import React from 'react';
import Home from "./pages/Home";
import About from './pages/About';
import Login from "./pages/Login";
import Signup from './pages/Signup';
import MyProfile from './pages/MyProfile';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Switch> {}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Login' component={Login}></Route>
      <Route exact path='/Signup' component={Signup}></Route>
      <Route exact path='/About' component={About}></Route>
      <Route exact path='/MyProfile' component={MyProfile}></Route>
    </Switch>
  
  );
}

export default Main;