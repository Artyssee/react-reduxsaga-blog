// Interface for the overall blogState
export interface IblogState {
  blogItems: IBlogItemsState[];
  loading: boolean;
}

// Interface of state blogItems
export interface IBlogItemsState {
  id: number;
  userId: number;
  title?: string;
  body?: string;
}

// Interface for creating new blogPosts
export interface InewBlogItem {
  id?: number;
  userId: number;
  postTitle?: string;
  postBody?: string;
}

// Interface for editing blogPosts
export interface IeditBlogItem {
  id: number;
  userId: number;
  postTitle?: string;
  postBody?: string;
}
