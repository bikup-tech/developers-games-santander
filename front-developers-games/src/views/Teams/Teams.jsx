/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Teams.scss';

// Action Creators
import { loadTournamentTeams } from '../../redux/actions/mainActions';

// Components
import AppWrapper from '../../components/AppWrapper/AppWrapper';
import Loading from '../../components/Loading/Loading';
import LoadingError from '../../components/LoadingError/LoadingError';
import TeamCard from './components/TeamCard/TeamCard';

function Teams() {
  const dispatch = useDispatch();
  const {
    tournamentTeams, tournamentId, teamsLoading, loadTeamsError, isTeamRegistered,
  } = useSelector(({ mainReducer }) => mainReducer);

  useEffect(() => {
    if (!tournamentTeams) {
      dispatch(loadTournamentTeams(tournamentId));
    }
  }, [tournamentTeams]);

  return (

    <AppWrapper title="Equipos participantes">
      {
        teamsLoading
          ? (<Loading text="Cargando equipos del torneo..." />)
          : (
            <div className="teams">
              {loadTeamsError && (<LoadingError />) }
              {tournamentTeams && (
                <div className="teams__list">
                  {tournamentTeams.map((team, index) => (
                    <TeamCard team={team} number={index + 1} key={team._id} />
                  ))}
                </div>
              )}
            </div>
          )
      }
    </AppWrapper>
  );
}

export default Teams;
