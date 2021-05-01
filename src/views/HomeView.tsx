import { ReactElement } from 'react';

import { ThemeSwitcher } from '../components/ThemeSwitcher';

export const HomeView = (): ReactElement<HTMLDivElement> => (
  <div>
    <h1>Hello world!</h1>
    <span>Click me to switch theme</span>
    <ThemeSwitcher />
  </div>
);
