const initialState = {
  blogItems: [],
};

const removeArrayItem = (array: {id: number}[], id:number) => {
  const newArray = [...array];
  const removeIndex = newArray.map(function(aItem:any) { return aItem.id }).indexOf(id);
  newArray.splice(removeIndex, 1);
  return newArray;
};

const reducer = (state = initialState, action: any) => {
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
        return { ...state, blogItems: removeArrayItem(state.blogItems, action.id), loading: false }
    default: 
      return state;
    }
  };

export default reducer;
