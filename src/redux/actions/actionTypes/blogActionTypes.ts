import { IBlogItemsState, IeditBlogItem, InewBlogItem } from '../../../interfaces/blogInterfaces';

export const POST_BLOGITEM = 'POST_BLOGITEM';
export const POST_BLOGITEM_RECEIVED = 'POST_BLOGITEM_RECEIVED';
export const EDIT_BLOGITEM = 'EDIT_BLOGITEM';
export const EDIT_BLOGITEM_SUCCESSFUL = 'EDIT_BLOGITEM_SUCCESSFUL';
export const DELETE_BLOGITEM = 'DELETE_BLOGITEM';
export const DELETE_BLOGITEM_SUCCESSFUL = 'DELETE_BLOGITEM_SUCCESSFUL';
export const GET_BLOGITEMS = 'GET_BLOGITEMS';
export const BLOGITEMS_RECEIVED = 'BLOGITEMS_RECEIVED';

interface IGetAllBlogItemsAction {
  type: typeof GET_BLOGITEMS,
}

interface IGetAllBlogItemsReceivedAction {
  type: typeof BLOGITEMS_RECEIVED,
  json: IBlogItemsState[]
}

interface IPostBlogItemAction {
  type: typeof POST_BLOGITEM,
  payload: InewBlogItem,
}

interface IpostBlogItemReceivedAction {
  type: typeof POST_BLOGITEM_RECEIVED,
  payload: IBlogItemsState[]
}

interface IEditBlogItemAction {
  type: typeof EDIT_BLOGITEM,
  payload: IBlogItemsState,
}

interface IEditBlogItemActionSuccessful {
  type: typeof EDIT_BLOGITEM_SUCCESSFUL,
  payload: IeditBlogItem
}

interface IDeleteBlogItemAction {
  type: typeof DELETE_BLOGITEM,
  blogItemId: number,
}

interface IDeleteBlogItemSuccessfulAction {
  type: typeof DELETE_BLOGITEM_SUCCESSFUL,
  payload: number
}

export type BlogActionTypes =
    IGetAllBlogItemsAction
    | IGetAllBlogItemsReceivedAction
    | IPostBlogItemAction
    | IpostBlogItemReceivedAction
    | IEditBlogItemAction
    | IEditBlogItemActionSuccessful
    | IDeleteBlogItemAction
    | IDeleteBlogItemSuccessfulAction;
