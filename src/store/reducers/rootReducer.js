import { combineReducers } from 'redux';
import authReducer from './authReducer';
import planeReducer from './planeReducer';

const rootReducer = () => combineReducers({
  auth: authReducer,
  plane: planeReducer,
});
export default rootReducer;
