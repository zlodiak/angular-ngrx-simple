import { createReducer, on, Action } from '@ngrx/store';
import { addText } from './actions';

export const initialState: string = 'empty';

export const textReducer = createReducer(
  initialState,
  on(addText, (state, { text }) => text)
);