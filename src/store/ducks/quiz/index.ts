import reducer from './reducer';
import { State } from './types'
import quizTypes from './types'

import * as quizActions from "./actions";

export { quizActions, quizTypes };
export default reducer;
export type QuizState = State;