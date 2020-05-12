import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Houses from './pages/Houses';
import SingleHouse from './pages/SingleHouse';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/houses/:slug' component={SingleHouse} />
        <Route path='/houses' component={Houses} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
