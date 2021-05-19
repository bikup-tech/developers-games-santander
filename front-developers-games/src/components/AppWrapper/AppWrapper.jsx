import React from 'react';

import './AppWrapper.scss';

function AppWrapper({ title, children }) {
  return (
    <div className="app-wrapper">
      <div className="app-wrapper__title">
        <h2 className="title__text">{title}</h2>
      </div>
      <div className="app-wrapper__children">
        {children}
      </div>
    </div>
  );
}

export default AppWrapper;
