import { IpopupState } from '../../interfaces/popupInterfaces';

const initialState:IpopupState = {
    isOpen: false,
    loading: false,
};

const popupReducer = (state = initialState, action: any):IpopupState => {
    switch (action.type) {
    case 'TOGGLE_POPUP':
        return { ...state, isOpen: !state.isOpen };
      default: 
        return state;
    }
  };

export default popupReducer;
