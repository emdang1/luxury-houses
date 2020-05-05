import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/rooms/:slug' component={SingleRoom} />
        <Route path='/rooms' component={Rooms} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
