import { combineReducers } from 'redux';
import arrayReducer from './arrayReducer';
import objectReducer from './objectReducer';
import quizReducer from './quizReducer';
import countReducer from './countReducer';
import riskCountReducer from './riskCountReducer';

const rootReducer = combineReducers({
  riskState: riskCountReducer,
  countState: countReducer, 
  quizState: quizReducer,
  arrayState: arrayReducer,
  objectState: objectReducer,
});

export default rootReducer;
