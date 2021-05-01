import { FactActionTypes, FactState, LocalActions, SagaActions } from './types';

const initialState: FactState = {
  factIds: [],
  facts: {},
  selectedFact: '',
};

export function facts(state = initialState, action: FactActionTypes): FactState {
  switch (action.type) {
    case LocalActions.SELECT_NEXT_FACT: {
      const selectedIndex = state.factIds.indexOf(state.selectedFact);
      if (
        selectedIndex === -1 ||
        selectedIndex + 1 >= state.factIds.length ||
        state.factIds[selectedIndex + 1] === undefined
      )
        return { ...state, selectedFact: state.factIds[0] };
      return { ...state, selectedFact: state.factIds[selectedIndex + 1] };
    }
    case LocalActions.SELECT_PREV_FACT: {
      const selectedIndex = state.factIds.indexOf(state.selectedFact);
      if (selectedIndex === -1 || selectedIndex - 1 < 0 || state.factIds[selectedIndex - 1] === undefined)
        return { ...state, selectedFact: state.factIds[state.factIds.length - 1] };
      return { ...state, selectedFact: state.factIds[selectedIndex - 1] };
    }
    case SagaActions.GET_RANDOM_FACT_FULFILLED: {
      const id = action.payload._id;
      const exists = state.factIds.indexOf(id) !== -1;
      return {
        ...state,
        factIds: exists ? state.factIds : [...state.factIds, id],
        facts: exists ? state.facts : { ...state.facts, [id]: action.payload },
        selectedFact: id,
      };
    }
    default:
      return state;
  }
}
