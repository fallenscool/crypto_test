import { all } from 'redux-saga/effects';
import coinsSagas from './coins';

export default function* rootSaga() {
  yield all([...coinsSagas]);
}
