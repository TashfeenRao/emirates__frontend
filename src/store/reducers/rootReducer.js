import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import planeReducer from './planeReducer';

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  plane: planeReducer,
});
