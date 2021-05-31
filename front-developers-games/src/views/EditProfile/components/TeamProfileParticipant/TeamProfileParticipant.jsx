import React from 'react';

import './TeamProfileParticipant.scss';

import Input from '../../../../components/Input/Input';

function TeamProfileParticipant({ participantNumber, participant }) {
  // TODO: Adaptar xk pinti els valors dels participants pero no permeti escriure res

  return (
    <div className="register__participant register__participant-border">
      <h3 className="participant__title app__title">
        Participante
        {' '}
        {participantNumber}
        {' '}
        {participant.isCaptain ? '- Capitán' : ''}
      </h3>
      <div className="participant__inputs">
        <div className="inputs__entries">
          <div className="entries__name">
            <Input
              type="text"
              name="name"
              placeholder="Nombre del participante*"
              value={participant.name}
              disabled
            />
          </div>
          <div className="entries__surname">
            <Input
              type="text"
              name="surname"
              placeholder="Apellido del participante*"
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
              placeholder="Teléfono*"
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
