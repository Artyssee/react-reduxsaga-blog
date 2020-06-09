import { IblogState, IBlogItemsState } from '../../interfaces/blogInterfaces';

const initialState:IblogState = {
  blogItems: [],
  loading: false,
};

const removeArrayItem = (array: IBlogItemsState[], id:number) => {
  const newArray = [...array];
  const removeIndex = newArray.map(function(aItem:any) { return aItem.id }).indexOf(id);
  console.log('remove indexx', removeIndex);
  console.log('newArray', array);
  console.log('id', id);
  newArray.splice(removeIndex, 1);
  return newArray;
};

const blogReducer = (state = initialState, action: any):IblogState => {
    switch (action.type) {
    case 'GET_BLOGITEMS':
      return { ...state, loading: true };
    case 'BLOGITEMS_RECEIVED':
      return { ...state, blogItems: action.json, loading: false }
    case 'POST_BLOGITEM':
      return { ...state, loading: true}
    case 'POST_BLOGITEM_RECEIVED':
      return { ...state, blogItems: state.blogItems.concat(action.payload), loading: false}
    case 'DELETE_BLOGITEM':
        return { ...state, loading: true }
    case 'DELETE_BLOGITEM_SUCCESSFUL':
        return { ...state, blogItems: removeArrayItem(state.blogItems, action.payload), loading: false }
    case 'UPDATE_BLOGITEM':
          return {...state, blogItems: state.blogItems, loading: false}
    default: 
      return state;
    }
  };

export default blogReducer;
