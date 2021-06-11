import React from 'react';

import './TeamProfileParticipant.scss';

// Constants
import userRoles from '../../../../constants/userRoles'

// Components
import Input from '../../../../components/Input/Input';

function TeamProfileParticipant({ participantNumber, participant }) {
  return (
    <div className="register__participant register__participant-border">
      <h3 className="participant__title app__title app__title--noPadding">
        {participantNumber}
        {' - '}
        {participant.name}
        {' '}
        {participant.role === userRoles.CAPTAIN ? '(Captain)' : ''}

      </h3>
      <div className="participant__inputs">
        <div className="inputs__entries">
          <div className="entries__name">
            <Input
              type="text"
              name="name"
              placeholder="Participant name*"
              value={participant.name}
              disabled
            />
          </div>
          <div className="entries__surname">
            <Input
              type="text"
              name="surname"
              placeholder="Participant surname*"
              value={participant.surname}
              disabled
            />
          </div>
        </div>

        <div className="inputs__entries">
          <div className="entries__mail">
            <Input
              type="email"
              name="email"
              placeholder="e-mail*"
              value={participant.email}
              disabled
            />
          </div>
          <div className="entries__number">
            <Input
              type="number"
              name="phone"
              placeholder="Phone*"
              value={participant.phone}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamProfileParticipant;
