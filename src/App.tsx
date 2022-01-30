import { ThemeProvider } from 'styled-components';

import theme from './theme';

import Dashboard from 'modules/Dashboard';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Dashboard />
  </ThemeProvider>
);

export default App;
