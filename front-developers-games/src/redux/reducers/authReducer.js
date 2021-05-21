// import actionTypes from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case 'LOGIN':
      newState = { ...state, user: { isLogged: true } };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
