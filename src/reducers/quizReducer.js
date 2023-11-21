import {CHANGE_ELEMENT } from '../actions';

const initialArrayState = Array.from({ length: 72 }, () => 0);

const quizReducer = (state = initialArrayState, action) => {
  switch (action.type) {
    case CHANGE_ELEMENT:
      return state.map((item, index) =>
        index === action.payload.index ? action.payload.val : item
      );
    default:
      return state;
  }
};

export default quizReducer;
