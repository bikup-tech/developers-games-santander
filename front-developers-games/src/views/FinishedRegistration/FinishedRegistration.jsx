import React from 'react';

// components
import AppWrapper from '../../components/AppWrapper/AppWrapper';

function FinishedRegistration() {
  return (
    <AppWrapper title="Registration time ended">
      <section className="register-container">
        <h3 className="app__title normal__font-size">
          The registration  is closed! Stay tunned for upcoming events with Red Hat!
          Join us in our Red Hat developer site to get the latest news.
          <a
            href="https://developers.redhat.com/"
            target="_blank"
            rel="noreferrer"
            className="app__title normal__font-size"
          >
            (https://developers.redhat.com/)
          </a>
        </h3>
      </section>
    </AppWrapper>
  );
}

export default FinishedRegistration;
