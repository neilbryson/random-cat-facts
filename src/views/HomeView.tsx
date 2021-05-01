import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { CatFact } from '../components/CatFact';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getRandomFact, selectNextFact, selectPrevFact } from '../redux/modules/facts/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 0;
`;

const NavigationButton = styled.button`
  border: none;
  border-radius: 6px;
  height: 36px;
`;

const RequestFactButton = styled(NavigationButton)`
  margin-bottom: 10px;
`;

const PrevNextContainer = styled.div`
  display: flex;
  margin-bottom: 10px;

  > button {
    flex: 1 1 auto;

    &:not(:last-of-type) {
      margin-right: 10px;
    }
  }
`;

export const HomeView = (): ReactElement<HTMLDivElement> => {
  const { factIds, facts, selectedFact } = useTypedSelector((state) => ({
    factIds: state.facts.factIds,
    facts: state.facts.facts,
    selectedFact: state.facts.selectedFact,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomFact());
  }, [dispatch]);

  function renderFact(): ReturnType<typeof CatFact> | null {
    if (factIds.length === 0 || factIds.indexOf(selectedFact) === -1) return null;
    const fact = facts[selectedFact];
    return <CatFact createdAt={fact.createdAt} fact={fact.text} />;
  }

  function onClickRequest(): void {
    dispatch(getRandomFact());
  }

  function onClickPrevious(): void {
    dispatch(selectPrevFact());
  }

  function onClickNext(): void {
    dispatch(selectNextFact());
  }

  return (
    <Container>
      <RequestFactButton onClick={onClickRequest}>Request random fact</RequestFactButton>
      {factIds.length > 2 && (
        <PrevNextContainer>
          <NavigationButton onClick={onClickPrevious}>Select previous fact</NavigationButton>
          <NavigationButton onClick={onClickNext}>Select next fact</NavigationButton>
        </PrevNextContainer>
      )}
      {renderFact()}
    </Container>
  );
};
