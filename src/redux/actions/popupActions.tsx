import { OPEN_POPUP, CLOSE_POPUP, PopupActionTypes } from './actionTypes/popupActionTypes';
import { IBlogItemsState } from '../../interfaces/blogInterfaces';

export const openPopup = (payload:IBlogItemsState):PopupActionTypes => ({
  type: OPEN_POPUP,
  payload,
});

export const closePopup = ():PopupActionTypes => ({
  type: CLOSE_POPUP,
});
