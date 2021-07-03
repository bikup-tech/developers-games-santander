/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';

// constant
import userRoles from '../../constants/userRoles';
//  components
import Challenges from './components/Challenges/Challenges';

function ChallengesPageContainer() {
  const { userLogged } = useSelector(({ authReducer }) => authReducer.user);
  const { tournament } = useSelector(({ tournamentReducer }) => tournamentReducer);

  return (
    <>
      {
          userLogged.role < userRoles.MENTOR ? (
            tournament?.isActive ? (
              <Challenges />
            ) : (
              <div>adios</div>
            )
          ) : (
            <Challenges />
          )

   }
    </>
  );
}

export default ChallengesPageContainer;
