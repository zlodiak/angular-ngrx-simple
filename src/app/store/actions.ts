import { createAction, props } from '@ngrx/store';

export const addText = createAction(
  '[simple text] Add text',
  props<{ text }>()
);