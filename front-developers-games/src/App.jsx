import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import Register from './views/Register/Register';
// import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/" component={Register} />
      </Switch>

    </div>
  );
}

export default App;
