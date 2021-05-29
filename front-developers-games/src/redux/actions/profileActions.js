import actionTypes from './actionTypes';

export function setProfileInputValue(name, value) {
  return {
    type: actionTypes.SET_PROFILE_INPUT_VALUE,
    name,
    value,
  };
}

export function coso() {
  console.log();
}
