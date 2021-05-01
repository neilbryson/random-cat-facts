import { ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { CatFact } from '../components/CatFact';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { getRandomFact } from '../redux/modules/facts/actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 30px 0;
`;

const RequestFactButton = styled.button`
  flex-grow: 0;
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

  return (
    <Container>
      {renderFact()}
      <RequestFactButton onClick={onClickRequest}>Request random fact</RequestFactButton>
    </Container>
  );
};
