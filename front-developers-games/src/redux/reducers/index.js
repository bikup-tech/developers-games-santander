import { combineReducers } from 'redux';
import mainReducer from './mainReducer';
import authReducer from './authReducer';
import registerReducer from './registerReducer';

export default combineReducers({
  mainReducer, authReducer, registerReducer,
});
