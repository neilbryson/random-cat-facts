import { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  createdAt: string;
  fact: string;
}

const Container = styled.div``;

const Fact = styled.span``;

const Date = styled.span``;

export const CatFact = ({
  createdAt,
  fact,
  ...other
}: Props & HTMLAttributes<HTMLDivElement>): ReactElement<HTMLDivElement> => (
  <Container {...other}>
    <Fact>{fact}</Fact>
    <Date>{createdAt}</Date>
  </Container>
);
