import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import * as reducers from '../reducers'
import localstorage from '../middleware/localstorage'

let createStoreWithMiddleware

// Configure the dev tools when in DEV mode
if (module.hot) {
  const { devTools } = require('redux-devtools')
  createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, localstorage),
    devTools()
  )(createStore)
} else {
  createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)
}

const rootReducer = combineReducers(reducers)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
