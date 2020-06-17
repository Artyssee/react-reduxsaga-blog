import {
  GET_BLOGITEMS,
  BLOGITEMS_RECEIVED,
  POST_BLOGITEM,
  EDIT_BLOGITEM,
  DELETE_BLOGITEM,
  BlogActionTypes,
  POST_BLOGITEM_RECEIVED,
  DELETE_BLOGITEM_SUCCESSFUL,
  EDIT_BLOGITEM_SUCCESSFUL,
} from '../actions/actionTypes/blogActionTypes';
import { IblogState } from '../../interfaces/blogInterfaces';

const initialState: IblogState = {
  blogItems: [],
  loading: false,
};

const blogReducer = (state: IblogState = initialState, action: BlogActionTypes): IblogState => {
  switch (action.type) {
    case GET_BLOGITEMS:
      return { ...state, loading: true };
    case BLOGITEMS_RECEIVED:
      return { ...state, blogItems: action.json, loading: false };
    case POST_BLOGITEM:
      return { ...state, loading: true };
    case POST_BLOGITEM_RECEIVED:
      return { ...state, blogItems: state.blogItems, loading: false };
    case DELETE_BLOGITEM:
      return { ...state, loading: true };
    case DELETE_BLOGITEM_SUCCESSFUL:
      return { ...state, blogItems: state.blogItems, loading: false };
    case EDIT_BLOGITEM:
      return { ...state, loading: true };
    case EDIT_BLOGITEM_SUCCESSFUL:
      return { ...state, blogItems: state.blogItems, loading: false };
    default:
      return state;
  }
};

export default blogReducer;
