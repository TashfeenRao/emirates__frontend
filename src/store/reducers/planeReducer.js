const initialState = {
  planes: [
    { id: '1', title: 'plane 1', description: 'hello jee blah blah' },
    { id: '2', title: 'plane 2', description: 'hello jee blah blah' },
    { id: '3', title: 'plane 3', description: 'hello jee blah blah' },
  ],
};

const rootReducer = (state = initialState, action) => state;
export default rootReducer;
