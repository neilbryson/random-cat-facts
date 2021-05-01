import { FactActionTypes, LocalActions, SagaActions } from './types';

export const selectPrevFact = (): FactActionTypes => ({
  type: LocalActions.SELECT_PREV_FACT,
});

export const selectNextFact = (): FactActionTypes => ({
  type: LocalActions.SELECT_NEXT_FACT,
});

export const getRandomFact = (): FactActionTypes => ({
  type: SagaActions.GET_RANDOM_FACT_PENDING,
});
