import { IpopupState, IcurrentPopup } from '../../interfaces/popupInterfaces';
import { PopupActionTypes, OPEN_POPUP, CLOSE_POPUP } from '../actions/actionTypes/popupActionTypes';

const initialState:IpopupState = {
  isOpen: false,
  currentPopup: {} as IcurrentPopup,
};

const popupReducer = (state = initialState, action: PopupActionTypes):IpopupState => {
  switch (action.type) {
    case OPEN_POPUP:
      return { ...state, isOpen: !state.isOpen, currentPopup: action.payload };
    case CLOSE_POPUP:
      return {
        ...state,
        isOpen: !state.isOpen,
        currentPopup: {} as IcurrentPopup,
      };
    default:
      return state;
  }
};

export default popupReducer;
