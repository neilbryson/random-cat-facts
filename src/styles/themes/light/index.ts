import { colors as dark } from '../dark';
import appColors from './app';

export const colors = {
  // dark is the default theme, inherit it
  ...dark,
  app: appColors,
};
