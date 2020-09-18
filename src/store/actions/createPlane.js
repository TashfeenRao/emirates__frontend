/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { CREATE_PROJECT } from '../constants/constants';

export const createPlane = plane => (dispatch, getState) => {
// async code
  dispatch({ type: CREATE_PROJECT, plane });
};
