import { HTMLAttributes, ReactElement, useContext, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';

import { LOCAL_STORAGE_KEY, ThemeContext, Themes } from '../contexts/Theme';

const Container = styled.div<{ activeTheme: Themes }>`
  border: 1px solid ${(props) => props.theme.themeSwitcher.body.normal.BORDER_COLOR};
  border-radius: 8px;
  height: 30px;
  width: 70px;
  position: relative;
  cursor: pointer;
  background-color: ${({ activeTheme, theme }) =>
    activeTheme === Themes.dark ? theme.themeSwitcher.body.active.BG_COLOR : theme.themeSwitcher.body.normal.BG_COLOR};
`;

const Circle = styled.span<{ activeTheme: Themes }>`
  height: 100%;
  width: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.themeSwitcher.circle.BG_COLOR};
  border: 1px solid ${(props) => props.theme.themeSwitcher.circle.BORDER_COLOR};
  display: block;
  position: absolute;
  ${({ activeTheme }) => (activeTheme === Themes.dark ? 'left: 0;' : 'right: 0;')};
`;

export const ThemeSwitcher = (
  props: Omit<HTMLAttributes<HTMLDivElement>, 'children'>,
): ReactElement<HTMLDivElement> => {
  const [activeTheme, setActiveTheme] = useState<Themes>(Themes.dark);
  const { toggleTheme } = useContext(ThemeContext);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    const isTheme = (theme: unknown): theme is Themes => theme === Themes.dark || theme === Themes.light;
    if (isTheme(savedTheme)) setActiveTheme(savedTheme);
  }, []);

  function onClick(): void {
    toggleTheme();
    setActiveTheme(activeTheme === Themes.dark ? Themes.light : Themes.dark);
  }

  return (
    <Container activeTheme={activeTheme} onClick={onClick} {...props}>
      <Circle activeTheme={activeTheme} />
    </Container>
  );
};
