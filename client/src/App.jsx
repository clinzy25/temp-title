import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import HostFeed from './components/pages/HostFeed';
import Error from './components/pages/ErrorPage';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/feeds'>
        <HostFeed />
      </Route>
      <Route exact path='*'>
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
