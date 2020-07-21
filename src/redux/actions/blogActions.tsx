import {
  GET_BLOGITEMS,
  POST_BLOGITEM,
  EDIT_BLOGITEM,
  DELETE_BLOGITEM,
  BlogActionTypes,
} from './actionTypes/blogActionTypes';
import { IBlogItemsState } from '../../interfaces/blogInterfaces';

export const getBlogItems = ():BlogActionTypes => ({ type: GET_BLOGITEMS });

export const postBlogItem = (payload:IBlogItemsState):BlogActionTypes => ({
  type: POST_BLOGITEM,
  payload,
});

export const deleteBlogItem = (blogItemId:number):BlogActionTypes => ({
  type: DELETE_BLOGITEM,
  blogItemId,
});

export const editBlogItem = (blogitem:IBlogItemsState):BlogActionTypes => ({
  type: EDIT_BLOGITEM,
  payload: blogitem,
});
