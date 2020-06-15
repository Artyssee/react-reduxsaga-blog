import { GET_BLOGITEMS, POST_BLOGITEM, EDIT_BLOGITEM, DELETE_BLOGITEM, blogActionTypes } from './actionTypes/blogActionTypes';
import { IBlogItemsState } from "../../interfaces/blogInterfaces";

export const getBlogItems = () => ({ type: GET_BLOGITEMS });

export const postBlogItem = (payload:object):blogActionTypes => ({
  type: POST_BLOGITEM,
  payload,
});

export const deleteBlogItem = (blogItemId:number):blogActionTypes => ({
  type: DELETE_BLOGITEM,
  blogItemId,
});

export const editBlogItem = (blogitem:IBlogItemsState):blogActionTypes => ({
  type: EDIT_BLOGITEM,
  payload: blogitem,
});
