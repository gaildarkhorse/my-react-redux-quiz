import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM  } from '../actions';

const initialArrayState = [];

const arrayReducer = (state = initialArrayState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      return state.filter((item, index) => index !== action.payload);
    case CHANGE_ITEM:
      return state.map((item, index) =>
        index === action.payload.index ? action.payload.newItem : item
      );
    default:
      return state;
  }
};

export default arrayReducer;
