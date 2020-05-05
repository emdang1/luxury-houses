import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/' component={Rooms} />
        <Route path='/single-room/' exact component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
