import axios from 'axios';

// constants
import actionTypes from './actionTypes';
import APIconstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';

// actions
import { setAlert } from './alertActions';

export default function loginTeam(email, password) {
  return async (dispatch) => {
    try {
      const body = { email, password };
      const loginTeamEndpoint = `${APIconstants.HOSTNAME}${APIconstants.LOGIN_TEAM}`;
      const { data } = await axios.get(loginTeamEndpoint, body);

      dispatch(
        setAlert(
          alertConstants.types.SUCCESS,
          alertConstants.messages.LOGIN_TEAM,
          alertConstants.icons.SUCCESS,
        ),
      );
      dispatch(loginTeamSuccess(data));
    } catch (loginError) {
      dispatch(
        setAlert(
          alertConstants.types.ERROR,
          alertConstants.messages.LOGIN_TEAM_ERROR,
          alertConstants.icons.SUCCESS,
        ),
      );
      dispatch(loginTeamError(loginError));
    }
  };
}
