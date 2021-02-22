import { createAction, props } from '@ngrx/store';

export const addText = createAction(
  '[simple text] Add text',
  props<{ text }>()
);

export const addQuestion = createAction(
  '[simple question] Add question',
  props<{ question }>()
);

export const deleteQuestion = createAction(
  '[simple question] delete question'
);