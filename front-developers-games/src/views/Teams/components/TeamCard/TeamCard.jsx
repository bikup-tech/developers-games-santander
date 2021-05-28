import React from 'react';
import './TeamCard.scss';

import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';

function renderPendingChallenges(completedChallenges) {
  return 6 - completedChallenges;
}

function TeamCard({ team, number }) {
  return (
    <div className="team-card">
      <div className="team__info">
        <div className="info__avatar">
          <img src={avatarIcon} alt="team avatar" className="avatar__image" />
        </div>
        <div className="info__data">
          <div className="data__title">
            <h3 className="title__text">{`${number}. ${team.name}`}</h3>
            <img src={viewIcon} alt="view team" className="title__view" />
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
    </div>
  );
}

export default TeamCard;
