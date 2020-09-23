import { GET_ERRORS, CLEAR_ERRORS } from '../constants/constants';

const initialState = {
  status: null,
  id: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ERRORS:
      return { ...state, ...payload };
    case CLEAR_ERRORS:
      return {
        ...state,
        status: null,
        id: null,
      };
    default:
      return state;
  }
};
