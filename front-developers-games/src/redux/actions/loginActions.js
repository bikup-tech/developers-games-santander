import axios from 'axios';

// constants
import actionTypes from './actionTypes';
import APIconstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';

// actions
import { setAlert } from './alertActions';

export function loginSuccess(user) {
  console.log(user);
  console.log('he entrado al success');
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user,
  };
}

export function loginError(error) {
  console.log('he entrado al error');
  return {
    type: actionTypes.LOGIN_ERROR,
    error,
  };
}

export default function login(email, password) {
  return async (dispatch) => {
    try {
      const body = { email, password };
      const loginEndpoint = `${APIconstants.HOSTNAME}${APIconstants.LOGIN}`;
      const { data } = await axios.get(loginEndpoint, body);

      dispatch(
        setAlert(
          alertConstants.types.SUCCESS,
          alertConstants.messages.LOGIN_TEAM,
          alertConstants.icons.SUCCESS,
        ),
      );
      dispatch(loginSuccess(data));
    } catch (logError) {
      dispatch(
        setAlert(
          alertConstants.types.ERROR,
          alertConstants.messages.LOGIN_TEAM_ERROR,
          alertConstants.icons.WARNING,
        ),
      );
      dispatch(loginError(logError));
    }
  };
}
