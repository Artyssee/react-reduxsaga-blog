import { all, put, takeLatest } from 'redux-saga/effects';
import { IpopupState } from '../../interfaces/popupInterfaces';

interface IPostAction {
    type: 'TOGGLE_POPUP',
    payload: IpopupState
};

function* togglePopupItem(action:IPostAction) {
    yield put({ type: "TOGGLE_POPUP_SUCCESSFUL", action })
}

function* togglePopup() {
    yield takeLatest('TOGGLE_POPUP', togglePopupItem)
}

export default function* blogSagas() {
   yield all([
   togglePopup(),
   ]);
}