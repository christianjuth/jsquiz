import { quizTypes, QuizState } from './quiz';
import { Reducer } from 'redux';

type GetKeys<T> = keyof T;

export type Action = {
  type: GetKeys<
    typeof quizTypes
  >,
  payload?: any
}

export type CombinedState = {
  quiz: QuizState
}

export type CombinedReducers = {
  [key in keyof CombinedState]: Reducer<CombinedState[key], any>
}