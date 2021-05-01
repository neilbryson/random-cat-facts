import 'styled-components';

import type { colors } from '../styles/themes/dark';

type BaseTheme = typeof colors;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends BaseTheme {}
}
