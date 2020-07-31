import { combineReducers } from 'redux'
import { CombinedReducers } from './types'

import quiz from './quiz';

const rootReducer = combineReducers<CombinedReducers>({
  quiz
});

export default rootReducer;