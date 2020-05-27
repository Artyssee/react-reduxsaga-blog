export const getBlogItems = () => ({ type: 'GET_BLOGITEMS' });
export const postBlogItem = ({payload}:any) => ({ type: 'POST_BLOGITEM', payload });
