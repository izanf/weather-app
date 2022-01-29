import { ThemeProvider } from 'styled-components';

import theme from './theme';

import Dashboard from 'modules/Dashboard';

const App = () => (
  <ThemeProvider theme={theme}>
    <Dashboard />
  </ThemeProvider>
);

export default App;
