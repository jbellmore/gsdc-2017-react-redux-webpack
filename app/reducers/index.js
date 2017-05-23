import { combineReducers } from 'redux';

import calculatorReducer from './calculator-reducer';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  calculator: calculatorReducer
});

export default rootReducer;