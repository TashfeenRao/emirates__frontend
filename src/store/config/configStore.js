import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import apiMiddleWare from '../middleware/apiMiddleWare';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(apiMiddleWare));
}
