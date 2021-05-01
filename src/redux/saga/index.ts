import { all } from 'redux-saga/effects';

import { catFactsSaga } from './catFacts';

export function* rootSaga() {
  yield all([...catFactsSaga]);
}
