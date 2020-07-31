import types, { State } from './types';

const initialState: State = {
  problem: null,
  finishedProblem: false,
  correct: null,
  grades: []
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.LOAD_PROBLEM: 
      return {
        ...state,
        problem: action.payload,
        finishedProblem: false
      }
    case types.FINISH_PROBLEM: 
      return {
        ...state,
        grades: [...state.grades, +action.payload.correct],
        finishedProblem: true,
        correct: action.payload.correct
      }
    default:
      return state;
  }
}