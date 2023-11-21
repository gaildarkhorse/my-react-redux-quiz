import {INCREASE_RISK_CNT, DECREASE_RISK_CNT } from '../actions';

const initialState = 0;

const riskCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_RISK_CNT:
      state ++;
      return (state);
    case DECREASE_RISK_CNT:
      state --;
      return (state);
    default:
      return state;
  }
};

export default riskCountReducer;