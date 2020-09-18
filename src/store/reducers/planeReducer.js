/* eslint-disable default-case */
import { CREATE_PROJECT } from '../constants/constants';

const initialState = {
  planes: [
    { id: '1', title: 'plane 1', description: 'hello jee blah blah' },
    { id: '2', title: 'plane 2', description: 'hello jee blah blah' },
    { id: '3', title: 'plane 3', description: 'hello jee blah blah' },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      // console.log(action.plane);
  }
  return state;
};
export default rootReducer;
