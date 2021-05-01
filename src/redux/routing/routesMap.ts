import type { RoutesMap } from 'redux-first-router';

export const Routes = {
  HOME: '@route/HOME',
} as const;

export const routesMap: RoutesMap = {
  [Routes.HOME]: {
    path: '/',
  },
};
