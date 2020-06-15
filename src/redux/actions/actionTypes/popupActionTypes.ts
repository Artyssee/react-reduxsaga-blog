export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

interface openPopupAction { 
    type: typeof OPEN_POPUP, 
    payload: object
};

interface closePopupAction {
    type: typeof CLOSE_POPUP,
};

export type popupActionTypes = 
    openPopupAction
    | closePopupAction
;
