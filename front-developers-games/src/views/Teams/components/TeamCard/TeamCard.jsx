/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './TeamCard.scss';

import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';

function renderPendingChallenges(completedChallenges) {
  return 6 - completedChallenges;
}

function TeamCard({ team, number }) {
  const [isExtraVisible, setIsExtraVisible] = useState(false);

  function handleShowExtraClick() {
    setIsExtraVisible(!isExtraVisible);
  }

  let printedChallenges = 0;

  return (
    <div className={`team-card ${isExtraVisible && 'cosoVis'}`}>
      <div className="team-card__info">
        <div className="info__avatar">
          <img src={avatarIcon} alt="team avatar" className="avatar__image" />
        </div>
        <div className="info__data">
          <div className="data__title">
            <h3 className="title__text">{`${number}. ${team.name}`}</h3>
            <img src={viewIcon} alt="view team" className="title__view" onClick={handleShowExtraClick} />
          </div>
          <div className="data__completed">
            <div className="completed__item completed__item--success">
              <span className="completed__text">Retos Completados:</span>
              <span className="completed__number">{team.solvedChallenges}</span>
            </div>
            <div className="completed__separator desktop" />
            <div className="completed__item completed__item--pending">
              <span className="completed__text">Retos Pendientes:</span>
              <span className="completed__number">{renderPendingChallenges(team.solvedChallenges)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`team-card__extra ${isExtraVisible && 'team-card__extra--visible'} `}>
        <div className="extra__members">
          <h3 className="members__title">Miembros del equipo</h3>
          <div className="members__member-list">
            {team.participants.map((participant, index) => (
              <div className={`member-list__member ${index % 2 === 0 && 'dark-background'}`}>
                <div className="member__info">
                  <span className="member__name">{participant.name}</span>
                  <span className="member__email desktop">{participant.email}</span>
                  <span className="member__phone">{participant.phone}</span>
                </div>
                <div className="member__actions" />
              </div>
            ))}
          </div>
        </div>
        <div className="extra__challenges">
          <h3 className="members__title">Desafíos completados</h3>
          <div className="members__member-list">
            {team.teamChallenges.map((challenge) => {
              if (challenge.isCompleted) {
                console.log('pinto');
                printedChallenges += 1;
                return (
                  <div className={`member-list__member ${printedChallenges % 2 !== 0 && 'dark-background'}`}>
                    <div className="member__info">
                      <span className="member__name">{challenge.tournamentChallenge}</span>
                    </div>
                    <div className="member__actions" />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
