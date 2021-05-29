import actionTypes from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
  let newState = {};
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      newState = { ...state, user: { isLogged: true, userLogged: action.user, loginError: null } };
      break;

    case actionTypes.LOGIN_ERROR:
      newState = { ...state, loginError: action.error };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
