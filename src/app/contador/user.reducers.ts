import { Action, createReducer, on } from "@ngrx/store";
import { incioSession } from "./user.actions";

/* export const userState = {
    name: '',
    token: ''
};
export function userReducer(state = { userState }, action: Action){
  switch (action.type){
    case incioSession.type:
      {return  state['name'] = userState.name, state['token'] = userState.token; };
    default:
      return state;
  }
} */

export const userState = {
  name: "null",
  token: "nulll",
};
//on(incioSession, (state, { name,token }))
const __userReducer = createReducer(
  userState,
  on(incioSession, (state, { user }) => ({
    name: user.name,
    token: user.token,
  }))
);

export function userReducer(state, action) {
  return __userReducer(state, action);
}
