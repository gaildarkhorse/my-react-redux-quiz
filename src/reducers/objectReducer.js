import { UPDATE_OBJECT_STATE } from '../actions';

const initialState = {
  name: 'John Doe',
  age: 30
};

const objectReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_OBJECT_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default objectReducer;
