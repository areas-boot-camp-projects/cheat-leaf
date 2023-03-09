import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import MyProfile from './pages/MyProfile';
import Leaf from './pages/Leaf';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Switch> {}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/Signin' component={Signin}></Route>
      <Route exact path='/Signup' component={Signup}></Route>
      <Route exact path='/About' component={About}></Route>
      <Route exact path='/MyProfile' component={MyProfile}></Route>
      <Route exact path='/leaf/:leafId' component={Leaf}></Route>
    </Switch>
  
  );
}

export default Main;