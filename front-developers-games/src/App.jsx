import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Home from './views/Home/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
