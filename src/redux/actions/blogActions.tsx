export const getBlogItems = () => ({ type: 'GET_BLOGITEMS' });
export const postBlogItem = (payload:object) => ({ type: 'POST_BLOGITEM', payload });
export const deleteBlogItem = (payload:number) => ({ type: 'DELETE_BLOGITEM', payload });
export const updateBlogItem = (payload:object) => ({ type: 'UPDATE_BLOGITEM', payload });
