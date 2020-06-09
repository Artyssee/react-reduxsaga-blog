// Interface for creating new blogPosts
export interface InewPost {
    userId: number,
    postTitle: string,
    postBody: string
};

// Interface of global state
export interface Istate {
    blogState: IblogState,
    popupState: object,
};

// Interface for blogState
export interface IblogState {
    blogItems: IBlogItemsState[],
    loading: boolean,
};

// Interface for popupState


// Interface of state blogItems
export interface IBlogItemsState {
    id: number,
    userId: number,
    title: string,
    body: string,
};