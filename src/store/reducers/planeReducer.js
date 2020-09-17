const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'CREATEPLANE':
      return { ...state, ...payload };

    default:
      return state;
  }
};
