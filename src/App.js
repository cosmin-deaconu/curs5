import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Category from './pages/Category'
import Page404 from './pages/Page404'

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/about' component={About} />
        <Route path='/category/:categoryName' component={Category} />
        <Route path='*' component={Page404} />
      </Switch>
    </div>
  );
}

export default App;
