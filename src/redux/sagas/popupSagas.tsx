import { all, takeLatest } from 'redux-saga/effects';

function* watchOpenPopup() {
    yield takeLatest('OPEN_POPUP', () => {})
};

function* watchClosePopup() {
    yield takeLatest('CLOSE_POPUP', () => {})
};

export default function* blogSagas() {
   yield all([
    watchOpenPopup(),
    watchClosePopup(),
   ]);
}