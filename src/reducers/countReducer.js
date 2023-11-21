import {INCREASE_CHECKED, DECREASE_CHECKED } from '../actions';

const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CHECKED:
      state ++;
      return (state);
    case DECREASE_CHECKED:
      state --;
      return (state);
    default:
      return state;
  }
};

export default countReducer;
