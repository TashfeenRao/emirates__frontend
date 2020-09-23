import {
  USER_LOADING,
  USER_LOADED,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  AUTHENTICATION_ERROR,
  LOG_OUT,
  LOGIN_FAIL,
} from '../constants/constants';

const initialState = {
  isLoading: false,
  isAuthenticated: null,
  token: localStorage.getItem('token'),
  user: null,

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOADING:
      return { ...state, isLoading: true };
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: payload.user,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
    case AUTHENTICATION_ERROR:
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: null,
        token: null,
        user: null,
      };
    default:
      return state;
  }
};
