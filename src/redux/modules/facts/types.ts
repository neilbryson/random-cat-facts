import type { Fact } from '../../../types/CatFacts';
import type { Action } from '../../../types/Redux';

export const LocalActions = {
  SELECT_NEXT_FACT: '@facts/SELECT_NEXT_FACT',
  SELECT_PREV_FACT: '@facts/SELECT_PREV_FACT',
} as const;

export const SagaActions = {
  GET_RANDOM_FACT_PENDING: '@facts/GET_RANDOM_FACT_PENDING',
  GET_RANDOM_FACT_FULFILLED: '@facts/GET_RANDOM_FACT_FULFILLED',
  GET_RANDOM_FACT_REJECTED: '@facts/GET_RANDOM_FACT_REJECTED',
} as const;

export interface FactState {
  factIds: string[];
  facts: Record<string, Pick<Fact, '_id' | 'createdAt' | 'text' | 'updatedAt'>>;
  selectedFact: string;
}

export type SelectNextFact = Action<typeof LocalActions.SELECT_NEXT_FACT>;
export type SelectPrevFact = Action<typeof LocalActions.SELECT_PREV_FACT>;

export type GetRandomFactPending = Action<typeof SagaActions.GET_RANDOM_FACT_PENDING>;
export type GetRandomFactFulfilled = Action<
  typeof SagaActions.GET_RANDOM_FACT_FULFILLED,
  Pick<Fact, '_id' | 'createdAt' | 'text' | 'updatedAt'>
>;
export type GetRandomFactRejected = Action<typeof SagaActions.GET_RANDOM_FACT_REJECTED>;

export type FactActionTypes =
  | SelectNextFact
  | SelectPrevFact
  | GetRandomFactPending
  | GetRandomFactFulfilled
  | GetRandomFactRejected;
