import { IBlogItemsState } from '../../../interfaces/blogInterfaces';

export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

interface OpenPopupAction {
  type: typeof OPEN_POPUP,
  payload: IBlogItemsState,
}

interface ClosePopupAction {
  type: typeof CLOSE_POPUP,
}

export type PopupActionTypes =
    OpenPopupAction
    | ClosePopupAction;
