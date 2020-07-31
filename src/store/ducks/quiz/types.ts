import { Problem } from '../../../types'

export default {
  LOAD_PROBLEM: 'LOAD_PROBLEM',
  FINISH_PROBLEM: 'FINISH_PROBLEM'
}

export interface State {
  problem: Problem | null;
  finishedProblem: boolean;
  grades: number[];
  correct: boolean | null;
}