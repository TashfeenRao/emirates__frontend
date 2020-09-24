/* eslint-disable import/prefer-default-export */
import { API } from '../constants/constants';

const setUserInfo = data => {
  const parsedToken = JSON.parse(atob(data.token.split('.')[1]));
  const userInfo = {
    userId: parsedToken.id,
    username: parsedToken.username,
    token: data.token,
    isLoggedIn: true,
  };
  localStorage.setItem('USER_INFO', JSON.stringify(userInfo));
  return {
    type: API,
    payload: userInfo,
  };
};

export const loadUser = (data, onSuccess, onError) => ({
  type: API,
  payload: {
    method: 'POST',
    url: '/api/register',
    data,
    success: response => (setUserInfo(response)),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});
