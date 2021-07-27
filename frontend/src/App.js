import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from './Components/HomePage';
import FavPage from './Components/FavPage';
import Header from './Components/Header';

export class App extends Component {
  render() {
    return (
      <>
      <Header/>
        <Router>
        <Switch>
          <Route exact path="/">
            < HomePage/>
          </Route>
          <Route exact path="/Fav">
            < FavPage/>
          </Route>
        </Switch>
    </Router>
      </>
    )
  }
}

export default App
