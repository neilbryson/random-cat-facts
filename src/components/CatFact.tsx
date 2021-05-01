import dayjs from 'dayjs';
import { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  createdAt: string;
  fact: string;
}

const Container = styled.div`
  border: 1px solid ${(props) => props.theme.app.body.TEXT_COLOR};
  border-radius: 6px;
  display: flex;
  flex-flow: column nowrap;
  padding: 12px;
`;

const Fact = styled.span`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
  word-wrap: break-word;
`;

const Date = styled.span`
  text-align: right;
  font-size: 12px;
`;

export const CatFact = ({
  createdAt,
  fact,
  ...other
}: Props & HTMLAttributes<HTMLDivElement>): ReactElement<HTMLDivElement> => (
  <Container {...other}>
    <Fact>{fact}</Fact>
    <Date>Submitted on {dayjs(createdAt).format('YYYY-MM-DD')}</Date>
  </Container>
);
