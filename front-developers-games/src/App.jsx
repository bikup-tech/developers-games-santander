import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Header} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
