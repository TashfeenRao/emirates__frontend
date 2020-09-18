import { combineReducers } from 'redux';
import authReducer from './authReducer';
import planeReducer from './planeReducer';

export default combineReducers({
  auth: authReducer,
  plane: planeReducer,
});
