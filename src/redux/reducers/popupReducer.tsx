import { IpopupState, IcurrentPopup } from '../../interfaces/popupInterfaces';
import { OPEN_POPUP, CLOSE_POPUP } from '../../redux/actions/actionTypes/popupActionTypes';

const initialState:IpopupState = {
    isOpen: false,
    currentPopup: {} as IcurrentPopup,
};

const popupReducer = (state = initialState, action: any):IpopupState => {
    switch (action.type) {
    case OPEN_POPUP:
        return { ...state, isOpen: state.isOpen = true, currentPopup: action.payload };
    case CLOSE_POPUP:
        return { 
          ...state,
          isOpen: state.isOpen = false,
          currentPopup: {} as IcurrentPopup
        }
      default:
        return state;
    }
  };

export default popupReducer;
