import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

// Views
import Home from './views/Home/Home';
import Challenges from './views/Challenges/Challenges';

// Components
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <ProtectedRoute path="/challenges" component={Challenges} />
      </Switch>

    </div>
  );
}

export default App;
