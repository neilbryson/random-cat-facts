import { ReactNode } from 'react';
import { NOT_FOUND } from 'redux-first-router';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { Routes } from '../redux/routing/routesMap';
import { BaseView } from './BaseView';
import { HomeView } from './HomeView';

function wrapBaseView(tree: ReactNode): ReturnType<typeof BaseView> {
  return <BaseView>{tree}</BaseView>;
}

export const RootView = (): JSX.Element | null => {
  const locationType = useTypedSelector((state) => state.location.type);

  switch (locationType) {
    case Routes.HOME:
      return wrapBaseView(<HomeView />);
    case NOT_FOUND:
    default:
      return null;
  }
};
