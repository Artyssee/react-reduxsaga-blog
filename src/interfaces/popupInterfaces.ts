// Default interface for open or closed popup
export interface IpopupState {
  isOpen: boolean,
  currentPopup: IcurrentPopup,
}

// Specific interface for currently selected popup
export interface IcurrentPopup {
  id: number,
  userId: number,
  title?: string,
  body?: string,
}
