import { IblogState } from './blogInterfaces';
import { IpopupState } from './popupInterfaces';

// Interface of global state
export interface Istate {
  blogState: IblogState,
  popupState: IpopupState,
}
