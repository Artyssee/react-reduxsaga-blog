import { IBlogItemsState, IeditBlogItem } from "../../../interfaces/blogInterfaces";

export const 
    POST_BLOGITEM = "POST_BLOGITEM",
    POST_BLOGITEM_RECEIVED = "POST_BLOGITEM_RECEIVED",
    EDIT_BLOGITEM = "EDIT_BLOGITEM",
    EDIT_BLOGITEM_SUCCESSFUL = "EDIT_BLOGITEM_SUCCESSFUL",
    DELETE_BLOGITEM = "DELETE_BLOGITEM",
    DELETE_BLOGITEM_SUCCESSFUL = "DELETE_BLOGITEM_SUCCESSFUL",
    GET_BLOGITEMS = "GET_BLOGITEMS",
    BLOGITEMS_RECEIVED = "BLOGITEMS_RECEIVED"
;

interface IGetAllBlogItemsAction {
    type: typeof GET_BLOGITEMS,
};

interface IGetAllBlogItemsReceivedAction {
    type: typeof BLOGITEMS_RECEIVED,
    json: IBlogItemsState[]
};

interface IPostBlogItemAction {
    type: typeof POST_BLOGITEM,
    payload: {},
};

interface IpostBlogItemReceivedAction {
    type: typeof POST_BLOGITEM_RECEIVED,
    payload: IBlogItemsState[]
};

interface IEditBlogItemAction {
    type: typeof EDIT_BLOGITEM,
    payload: IBlogItemsState,
};

interface IEditBlogItemActionSuccessful {
    type: typeof EDIT_BLOGITEM_SUCCESSFUL,
    payload: IeditBlogItem
};

interface IDeleteBlogItemAction {
    type: typeof DELETE_BLOGITEM,
    blogItemId: number,
};

interface IDeleteBlogItemSuccessfulAction {
    type: typeof DELETE_BLOGITEM_SUCCESSFUL,
    payload: number
};

export type blogActionTypes = 
    IGetAllBlogItemsAction
    | IGetAllBlogItemsReceivedAction
    | IPostBlogItemAction
    | IpostBlogItemReceivedAction
    | IEditBlogItemAction
    | IEditBlogItemActionSuccessful
    | IDeleteBlogItemAction
    | IDeleteBlogItemSuccessfulAction
;
