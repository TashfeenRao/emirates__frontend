/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API, BASE_URL } from '../constants/constants';

const apiMiddleWare = ({ dispatch, getState }) => next => action => {
  if (action.type !== API) return next(action);
  const {
    url,
    method,
    success,
    data,
    postProcessSuccess, postProcessError,
  } = action.payload;

  axios({
    method,
    url: BASE_URL + url,
    data: data || null,
  }).then(response => {
    if (success) dispatch(success(response.data));
    if (postProcessSuccess) postProcessSuccess(response.data);
  })
    .catch(err => {
      if (!err.response) console.warn(err);
      else if (err.response.data.error.message) {
        if (postProcessError) {
          postProcessError(err.response.data.error.message);
        }
      }
    });
};
export default apiMiddleWare;
