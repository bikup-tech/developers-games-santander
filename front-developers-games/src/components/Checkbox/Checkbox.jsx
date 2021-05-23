/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import './Checkbox.scss';

function Checkbox({ Text }) {
  return (
    <div className="input__checkbox">
      <input type="checkbox" id="test1" />
      <label htmlFor="test1">{Text}</label>
    </div>
  );
}

export default Checkbox;
