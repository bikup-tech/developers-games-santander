/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';

function Teams() {
  const dispatch = useDispatch();
  const { tournamentTeams } = useSelector(({ mainReducer }) => mainReducer);

  useEffect(() => {
    if (!tournamentTeams) {
      // TODO: dispatch loadTeams
    }
  }, [tournamentTeams]);

  return (
    <AppWrapper title="Equipos participantes">
      asd
    </AppWrapper>
  );
}

export default Teams;
