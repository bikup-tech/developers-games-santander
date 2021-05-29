import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

// Views
import Challenges from './views/Challenges/Challenges';
import ChallengeDetail from './views/ChallengeDetail/ChallengeDetail';
import Teams from './views/Teams/Teams';
import TermsAndConditions from './views/TermsAndConditions/TermsAndConditions';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import EditProfile from './views/EditProfile/EditProfile';

// Components
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import SuperProtectedRoute from './components/SuperProtectedRoute/SuperProtectedRoute';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <ProtectedRoute path="/challenges" component={Challenges} />
        <Route path="/terms" component={TermsAndConditions} />
        <ProtectedRoute path="/challenges" exact component={Challenges} />
        <ProtectedRoute path="/challenges/:challengeId" component={ChallengeDetail} />
        <ProtectedRoute path="/profile" component={EditProfile} />
        <SuperProtectedRoute path="/teams" component={Teams} />
      </Switch>

    </div>
  );
}

export default App;
