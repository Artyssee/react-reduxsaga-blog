const initialState = {
  blogItems: [],
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
      return { ...state, blogItems: state.blogItems.concat(action.json), loading: false}
    default: 
      return state;
    }
  };

export default reducer;
