import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducer from '../reducer/index.js';
import {crashReporter} from '../middleware/index.js';

const store = createStore(
  combineReducer,
  compose(
    applyMiddleware(crashReporter, thunk, createLogger())
  )
);

export default store;
