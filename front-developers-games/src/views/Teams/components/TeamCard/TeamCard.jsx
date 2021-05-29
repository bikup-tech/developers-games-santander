/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import './TeamCard.scss';

// Images
import avatarIcon from '../../../../assets/images/avatar-icon.svg';
import viewIcon from '../../../../assets/images/view-icon.svg';
import linkIcon from '../../../../assets/images/link-icon.svg';

function renderPendingChallenges(completedChallenges) {
  return 6 - completedChallenges;
}

function TeamCard({ team, number }) {
  const [isExtraVisible, setIsExtraVisible] = useState(false);

  function handleShowExtraClick() {
    setIsExtraVisible(!isExtraVisible);
    const membersElement = document.querySelector(`.members-${team._id}`);
    const challengesElement = document.querySelector(`.challenges-${team._id}`);

    if (isExtraVisible) {
      setTimeout(() => {
        membersElement.classList.add('display-none');
        challengesElement.classList.add('display-none');
      }, 700);
    } else {
      membersElement.classList.remove('display-none');
      challengesElement.classList.remove('display-none');
    }
  }

  let printedChallenges = 0;

  return (
    <div className="team-card">
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
      <div id={`team-card__extra-${team._id}`} className={`team-card__extra ${isExtraVisible && 'team-card__extra--visible'} `}>
        <div className={`extra__members members-${team._id}`}>
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
        <div className={`extra__challenges challenges-${team._id}`}>
          <h3 className="members__title">Desafíos completados</h3>
          <div className="members__member-list">
            {team.teamChallenges.map((challenge) => {
              if (challenge.isCompleted) {
                printedChallenges += 1;
                return (
                  <div className={`member-list__member ${printedChallenges % 2 !== 0 && 'dark-background'}`}>
                    <div className="member__info">
                      <span className="completed-challenge__name">
                        #
                        {challenge.challengeNumber}
                        {' '}
                        {' '}
                        {challenge.challengeName}
                      </span>
                    </div>
                    <div className="member__actions">
                      <a href={challenge.deliverable} className="actions__link" target="_blank" rel="noreferrer">
                        <img src={linkIcon} alt="link" className="link__img" title="Go to Github" />
                      </a>
                    </div>
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
