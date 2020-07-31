import types from './types';
import problems from '../../../../data';
import { Problem } from '../../../types';
import { array } from '../../../utils';

const scrambledProblems = array.shuffle(problems);

function indentFix(code: string) {
  code = code.replace(/^(\s)*(\n|\r)+/, '').replace(/(\n|\r)+(\s)*$/, '');
  const indentation = code.match(/^\s*/)[0];
  code = code.replace(indentation, '');
  const regex = new RegExp(`(\n|\r)${indentation}`, 'g');
  code = code.replace(regex, '\n');
  return code;
}

function getNextProblem(crntProblem: Problem | null) {
  let output = scrambledProblems[0];
  
  let crntIndex = -1; 
  if (crntProblem !== null) {
    crntIndex = scrambledProblems.findIndex(p => p.id === crntProblem.id);
  }
  
  output = scrambledProblems[crntIndex + 1] ?? output;
  return output;
}
  
export function loadNextProblem() {
  return async (dispatch: any, getState: any) => {
    const state = getState();
    const problem = getNextProblem(state.quiz.problem);
    
    dispatch({
      type: types.LOAD_PROBLEM,
      payload: {
        ...problem,
        code: indentFix(problem.code)
      }
    });
  }
}

export function finishProblem(correct: boolean) {
  return {
    type: types.FINISH_PROBLEM,
    payload: {
      correct
    }
  };
}