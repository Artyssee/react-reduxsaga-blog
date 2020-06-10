import { combineReducers } from 'redux';
import blogReducer from './blogReducer';
import popupReducer from './popupReducer';

const rootReducer = combineReducers({
  blogState: blogReducer,
  popupState: popupReducer,
});

export default rootReducer;
