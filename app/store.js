import { createStore, applyMiddleware, combineReducers } from 'redux';

// Logger with default options
import logger from 'redux-logger';

import rootReducer from './reducers';

console.log("Initializing redux store");

export const store = createStore(rootReducer, applyMiddleware(logger));

export default store;