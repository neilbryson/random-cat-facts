import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import { ThemeProvider } from './contexts/Theme';
import { store } from './redux/configureStore';
import { RootView } from './views/RootView';

const BaseStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.app.body.BG_COLOR};
    color: ${(props) => props.theme.app.body.TEXT_COLOR};
  }
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BaseStyle />
        <RootView />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
