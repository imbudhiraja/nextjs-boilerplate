import { all } from 'redux-saga/effects';
import threads from './threads';
import user from './user';

const sagas = function* sagas() {
  yield all([
    threads(),
    user(),
  ]);
};

export default sagas;
