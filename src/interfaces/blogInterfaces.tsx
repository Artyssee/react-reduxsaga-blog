// Interface for creating new blogPosts
export interface InewPost {
    userId: number,
    postTitle: string,
    postBody: string
};

// Interface of state
export interface Istate {
    blogItems: IBlogItemsState[],
    loading: boolean,
};

// Interface of state blogItems
export interface IBlogItemsState {
    id: number,
    userId: number,
    title: string,
    body: string,
};