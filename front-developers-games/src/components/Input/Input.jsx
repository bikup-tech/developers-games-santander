import React from 'react';
import './Input.scss';

function Input({
  type, name, placeholder, value, isIncorrect, onChange,
}) {
  return (
    <input type={type} id={`input-${name}`} className={`input__field ${isIncorrect && 'input__field--incorrect'}`} placeholder={placeholder} onChange={onChange} name={name} value={value} />
  );
}

export default Input;
