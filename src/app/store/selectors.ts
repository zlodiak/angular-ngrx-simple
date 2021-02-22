import { createSelector } from "@ngrx/store";
import { StateType } from '../styles';

const selectState = (state: StateType) => state

export const selectText = createSelector(
  selectState,
  (state: StateType) => state.text
)