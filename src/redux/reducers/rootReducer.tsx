import blogReducer from './blogReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  blogState: blogReducer,
});

export default rootReducer;
