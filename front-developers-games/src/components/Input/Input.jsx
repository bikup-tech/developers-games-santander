import React from 'react';
import './Input.scss';

function Input({
  type, name, placeholder, value, isIncorrect, onChange, autocomplete, blueText, disabled,
}) {
  return (
    <input
      type={type}
      id={`input-${name}`}
      className={`input__field ${isIncorrect && 'input__field--incorrect'} ${blueText && 'blue-text'} ${disabled && 'input__field--disabled'}`}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      autoComplete={autocomplete ? 'on' : 'off'}
      disabled={disabled}
    />
  );
}

export default Input;
