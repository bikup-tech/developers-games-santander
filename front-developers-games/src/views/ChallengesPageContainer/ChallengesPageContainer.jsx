/* eslint-disable no-unused-vars */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';

// constant
import userRoles from '../../constants/userRoles';
//  components
import Challenges from './components/Challenges/Challenges';
import TournamentCountdown from '../TournamentCountdown/TournamentCountdown';

function ChallengesPageContainer() {
  const { userLogged } = useSelector(({ authReducer }) => authReducer.user);
  const { tournament } = useSelector(({ tournamentReducer }) => tournamentReducer);

  return (
    <>
      {/* {
          tournament && (
            userLogged.role < userRoles.MENTOR ? (
              tournament?.isActive ? (
                <Challenges />
              ) : (
                <TournamentCountdown date={tournament.startDate} />
              )
            ) : (
              <Challenges />
            )
          )

      } */}

      <Challenges />
    </>
  );
}

export default ChallengesPageContainer;
