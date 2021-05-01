import { HTMLAttributes, ReactElement } from 'react';
import styled from 'styled-components';

import { ThemeSwitcher } from '../components/ThemeSwitcher';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

const Header = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.app.header.BG_COLOR};
  padding: 0 20px;
`;

const Title = styled.span`
  font-size: 32px;
`;

const ContentContainer = styled.div`
  margin: 0 20px;
  height: 100%;
`;

export const BaseView = ({ children, ...other }: HTMLAttributes<HTMLDivElement>): ReactElement<HTMLDivElement> => {
  return (
    <Container {...other}>
      <Header>
        <Title>🐱</Title>
        <ThemeSwitcher />
      </Header>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};
