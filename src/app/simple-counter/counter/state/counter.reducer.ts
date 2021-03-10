import { increment, decrement, reset, addValue } from './counter.actions';
import { initialState } from './counter.state';
import { createReducer, on } from '@ngrx/store';

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + state.value,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - state.value,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),
  on(addValue, (state,action) => {
    return {
      ...state,
      value: action.value,
    };
  })
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}
