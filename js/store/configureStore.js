import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as reducers from '../reducers/index';
import api from '../middleware/api';
import localstorage from '../middleware/localstorage';
import dataAdapters from '../middleware/datatAdapters';

let createStoreWithMiddleware;

// Configure the dev tools when in DEV mode
if (__DEV__) {
  const {devTools, persistState} = require('redux-devtools');
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, localstorage, dataAdapters),
    devTools()
  )(createStore);
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
}

const rootReducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
