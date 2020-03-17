import React from 'react';
import AccountPage from './components/AccountPage';
import MainPage from './components/MainPage';
import history from './history';
import { Router, Switch, Route } from 'react-router';

function App() {
  return (
    <Router history={history}>
      <div className='App'>
        <Switch>
          <Route path='/' exact component={AccountPage} />
          <Route path='/main' exact component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
