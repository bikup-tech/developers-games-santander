import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

// Views
import Home from './views/Home/Home';
import Challenges from './views/Challenges/Challenges';
import ChallengeDetail from './views/ChallengeDetail/ChallengeDetail';
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions';

// Components
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/terms" component={TermsAndConditions} />
        <ProtectedRoute path="/challenges" exact component={Challenges} />
        <ProtectedRoute path="/challenges/:challengeId" component={ChallengeDetail} />
      </Switch>

    </div>
  );
}

export default App;
