import { createAction, props } from "@ngrx/store";
import { UserState } from '../app.reducers';

export const incioSession = createAction(
  "[User] inicioSession",
  props<{ user: UserState }>()
);

