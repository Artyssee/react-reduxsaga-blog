import { OPEN_POPUP, CLOSE_POPUP, popupActionTypes } from './actionTypes/popupActionTypes';

export const openPopup = (payload:object):popupActionTypes => ({ 
    type: OPEN_POPUP, 
    payload
});

export const closePopup = ():popupActionTypes => ({
    type: CLOSE_POPUP,
});
