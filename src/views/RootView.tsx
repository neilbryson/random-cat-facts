import { NOT_FOUND } from 'redux-first-router';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { Routes } from '../redux/routing/routesMap';
import { HomeView } from './HomeView';

export const RootView = (): JSX.Element | null => {
  const locationType = useTypedSelector((state) => state.location.type);

  switch (locationType) {
    case Routes.HOME:
      return <HomeView />;
    case NOT_FOUND:
    default:
      return null;
  }
};
