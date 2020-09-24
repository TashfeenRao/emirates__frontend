import { SET_USER_INFO } from '../constants/constants';

const defaultState = {
  isLoading: false,
  isLogedIn: false,
  token: null,
  userId: null,
  userName: null,

};
const userInfo = localStorage.getItem('USER_INFO');
const INITIALSTATE = userInfo ? JSON.parse(userInfo) : defaultState;

export default (state = INITIALSTATE, { type, payload }) => {
  switch (type) {
    case SET_USER_INFO:
      return { ...payload };
    default:
      return state;
  }
};
