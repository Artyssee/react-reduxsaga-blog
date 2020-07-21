import { all } from 'redux-saga/effects';
import blogSagas from './blogSagas';

export default function* rootSaga():Generator {
  yield all([
    blogSagas(),
  ]);
}
