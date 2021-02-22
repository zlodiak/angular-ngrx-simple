import { createReducer, on, Action } from '@ngrx/store';
import { addQuestion, addText, deleteQuestion } from './actions';

export const textReducer = createReducer(
  '',
  on(addText, (state, { text }) => text)
);

export const questionReducer = createReducer(
  { question: '' },
  on(addQuestion, (state, { question }) => {
    return {
      ...state,
      question: state.question + question,
    }
  }),
  on(deleteQuestion, (state) => {
    return {
      ...state,
      question: '',
    }
  })
);
