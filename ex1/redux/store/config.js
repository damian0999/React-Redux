import {createStore, applyMiddleware} from 'redux';
import combineReducer from '../reducer/index.js';
import {logger, crashReporter, thunk} from '../middleware/index.js';

const store = createStore(
  combineReducer,
  applyMiddleware(logger, crashReporter, thunk)
);

export default store;
