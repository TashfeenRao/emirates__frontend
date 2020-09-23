/* eslint-disable default-case */
import { CREATE_PLANE, CREATE_PLANE_ERROR } from '../constants/constants';

const initialState = {
  planes: [
    { id: '1', title: 'plane 1', description: 'hello jee blah blah' },
    { id: '2', title: 'plane 2', description: 'hello jee blah blah' },
    { id: '3', title: 'plane 3', description: 'hello jee blah blah' },
  ],
  error: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PLANE:
      console.log('plane created', action.plane);
      return state;
    case CREATE_PLANE_ERROR:
      console.log('error', action.error);
      return state;
    default:
      return state;
  }
};
export default rootReducer;
