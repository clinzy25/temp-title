import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/pages/Home';
import HostFeed from './components/pages/HostFeed';
import HostDashboard from './components/pages/HostDashboard';
import Error from './components/pages/Error';

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      {/* TODO: dashboard param */}
      <Route exact path='/dashboard'>
        <HostDashboard />
      </Route>
      <Route exact path='/feeds/:id'>
        <HostFeed />
      </Route>
      <Route exact path='*'>
        <Error />
      </Route>
    </Switch>
  </Router>
);

export default App;
