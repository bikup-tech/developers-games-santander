import React from 'react';
import './Input.scss';

function Input({
  type, name, placeholder, value, isIncorrect, onChange, autocomplete, blueText,
}) {
  return (
    <input
      type={type}
      id={`input-${name}`}
      className={`input__field ${isIncorrect && 'input__field--incorrect'} ${blueText && 'blue-text'}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      autoComplete={autocomplete ? 'on' : 'off'}
    />
  );
}

export default Input;
