import { all } from 'redux-saga/effects';
import blogSagas from './blogSagas';

export default function* rootSaga() {
   yield all([
   blogSagas(),
   ]);
}