/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { CREATE_PLANE, CREATE_PLANE_ERROR } from '../constants/constants';

export const createPlane = plane => (
  dispatch,
  getState,
  { getFirebase },
) => {
  // async code
  const firestore = getFirebase().getfirestore();
  firestore
    .collection('planes')
    .add({ ...plane, createdAt: new Date() })
    .then(() => dispatch({ type: CREATE_PLANE, plane }))
    .catch(error => {
      dispatch({ type: CREATE_PLANE_ERROR, error });
    });
};
