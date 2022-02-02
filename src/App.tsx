import { ThemeProvider } from 'styled-components';

import theme from './theme';

import Dashboard from 'modules/Dashboard';
import GlobalStyle from './GlobalStyle';

import { WeatherContextProvider } from 'hooks/weather';

const App = () => (
  <ThemeProvider theme={theme}>
    <WeatherContextProvider>
      <GlobalStyle />
      <Dashboard />
    </WeatherContextProvider>
  </ThemeProvider>
);

export default App;
