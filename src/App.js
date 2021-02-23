import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Beers from './views/Beers';
import Beer from './views/Beer';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer';
import Navbar from './component/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/beers/new">
          <NewBeer />
        </Route>
        <Route path="/beers/random">
          <RandomBeer />
        </Route>
        <Route path="/beers/:beerId">
          <Beer />
        </Route>
        <Route path="/beers">
          <Beers />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
