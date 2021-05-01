import type { AxiosResponse } from 'axios';
import { call, put, throttle } from 'redux-saga/effects';

import type { Fact } from '../../types/CatFacts';
import { api } from '../../utilities/api';
import * as types from '../modules/facts/types';

export function* getRandomFactsSaga() {
  try {
    const { data }: AxiosResponse<Fact> = yield call(api, { url: '/facts/random' });
    const { _id, createdAt, text, updatedAt } = data;
    yield put<types.GetRandomFactFulfilled>({
      type: types.SagaActions.GET_RANDOM_FACT_FULFILLED,
      payload: { _id, createdAt, text, updatedAt },
    });
  } catch (error) {
    yield put<types.GetRandomFactRejected>({ type: types.SagaActions.GET_RANDOM_FACT_REJECTED });
  }
}

export const catFactsSaga = [throttle(5000, types.SagaActions.GET_RANDOM_FACT_PENDING, getRandomFactsSaga)];
