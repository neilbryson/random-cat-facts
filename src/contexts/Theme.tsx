import { createContext, ReactNode, useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

import { themes } from '../styles/themes';

export const LOCAL_STORAGE_KEY = 'app-theme';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

interface WithTheme {
  // Toggle the app theme from dark to light and vice versa
  toggleTheme: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<WithTheme>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

export const ThemeProvider = (props: ProviderProps): ReturnType<typeof ThemeContext.Provider> => {
  const [theme, setTheme] = useState(Themes.dark);

  useEffect(() => {
    if (!localStorage.getItem(LOCAL_STORAGE_KEY)) localStorage.setItem(LOCAL_STORAGE_KEY, Themes.dark);
  }, []);

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!savedTheme) return;
    switch (savedTheme as Themes) {
      case Themes.light:
        setTheme(Themes.light);
        return;
      case Themes.dark:
      default:
        setTheme(Themes.dark);
    }
  }, []);

  function toggleTheme(): void {
    const toggleTo = theme === Themes.dark ? Themes.light : Themes.dark;
    localStorage.setItem(LOCAL_STORAGE_KEY, toggleTo);
    setTheme(toggleTo);
  }

  const ctx = { toggleTheme };

  return (
    <ThemeContext.Provider value={ctx}>
      <StyledComponentsThemeProvider theme={theme === Themes.dark ? themes.dark : themes.light}>
        {props.children}
      </StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
};
