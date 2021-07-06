import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './Header'
import Users from './Users'
import Products from './Products'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/users">
            <Header activePath="/users"/>
            <Users />
          </Route>
          <Route path="/products">
            <Header activePath="/products"/>
            <Products />
          </Route>
          <Redirect from="/" to="/users" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
