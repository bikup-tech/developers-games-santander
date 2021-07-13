import React from 'react';

import AppWrapper from '../../components/AppWrapper/AppWrapper';

function ParticipantGuide() {
  return (
    <AppWrapper title="Participant guide">
      <div className="terms">
        <div className="terms__group">
          <h3 className="terms__subtitle">Guide for participants</h3>
          <p className="terms__text">
            Each team will receive a link to an OpenShift cluster. This instance
            must be used to deploy the challenges during the entire
            competition.You will receive an email on the 27th to the email
            account used to register to the games.
          </p>
          <p className="terms__text">
            Teams will also be able to use CodeReady Workspaces if needed.
          </p>
          <p className="terms__text">
            To complete each challenge, teams should follow the instructions
            given on the challenge page. Challenges must be submitted in repo or
            .txt formats (depending on the exercise) via a github account. Other
            formats, such as images and screenshots, can be added. Here is a
            guide to getting started with github.
            {' '}
            <a href="https://developers.redhat.com/">
              https://developers.redhat.com/
            </a>
            .
          </p>
        </div>
      </div>
    </AppWrapper>
  );
}

export default ParticipantGuide;
