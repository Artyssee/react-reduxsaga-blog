export const getBlogItems = () => ({ type: 'GET_BLOGITEMS' });
export const postBlogItem = (payload:object) => ({ type: 'POST_BLOGITEM', payload });
export const deleteBlogItem = (payload:any) => ({ type: 'DELETE_BLOGITEM', payload });
