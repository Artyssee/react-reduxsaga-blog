import { IBlogItemsState } from "../../interfaces/blogInterfaces";

export const getBlogItems = () => ({ type: "GET_BLOGITEMS" });
export const postBlogItem = (payload: object) => ({
  type: "POST_BLOGITEM",
  payload,
});
export const deleteBlogItem = (payload: number) => ({
  type: "DELETE_BLOGITEM",
  payload,
});
export const updateBlogItem = (blogitem: IBlogItemsState) => ({
  type: "EDIT_BLOGITEM",
  payload: blogitem,
});
