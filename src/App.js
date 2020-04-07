import React from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Category from './pages/Category';
import Page404 from './pages/Page404';
import './utils/utility-classes.css';

//FIREBASE
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './configs/firebase';
import { render } from '@testing-library/react';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};


class App extends React.Component {
  constructor() {
    super();
    this.state = {}
  }


    render() {
    const {
      user,
      signOut,
      signInWithGoogle,
    } =  this.props;

    return (
      <div>
        <Switch>
          <Route
            path='/'
            exact={true}
            render={(props) => <Home {...props} signOut={signOut} user={user} />}
          />
          <Route
            path='/login'
            render={(props) => <Login {...props} signInWithGoogle={signInWithGoogle} />}
          />

          <Route path='/about' component={About} />
          <Route path='/category/:categoryName' component={Category} />
          <Route path='*' component={Page404} />
        </Switch>
      </div>
    );
  }
  
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
