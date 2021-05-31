import axios from 'axios';

import APIConstants from '../../constants/APIConstants';
import alertConstants from '../../constants/alertConstants';
import actionTypes from './actionTypes';

// Action Creators
import { setAlert } from './alertActions';
import { loadTeam } from './loginActions';

export function setProfileInputValue(name, value) {
  return {
    type: actionTypes.SET_PROFILE_INPUT_VALUE,
    name,
    value,
  };
}

export function updateTeamProfile(credentials, body) {
  return async (dispatch) => {
    try {
      const checkEndpoint = `${APIConstants.HOSTNAME}${APIConstants.CHECK_PASSWORD}`;
      const editProfileEndpoint = `${APIConstants.HOSTNAME}${APIConstants.EDIT_TEAM_PROFILE}`;

      const { data: isAllowed } = await axios.post(checkEndpoint, credentials);

      if (isAllowed) {
        await axios.patch(editProfileEndpoint, body);
        dispatch(
          setAlert(alertConstants.types.SUCCESS, alertConstants.messages.MODIFY_PROFILE_SUCCESS),
        );

        // If team name is modified, reload team info
        if (body.teamName) {
          dispatch(loadTeam(credentials.userId));
        }
      } else {
        dispatch(setAlert(alertConstants.types.ERROR, alertConstants.messages.WRONG_PASSWORD));
      }
    } catch (error) {
      dispatch(setAlert(alertConstants.types.ERROR, alertConstants
        .messages.MODIFY_PROFILE_ERROR));
    }
  };
}
