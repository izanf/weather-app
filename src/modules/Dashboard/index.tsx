import React from 'react';

import Sidebar from './Sidebar';
import Box from 'components/Box';
import MetricToggle from './MetricToggle';
import ForecastDays from './ForecastDays';
import { Wrapper } from './styles';

const Dashboard = () => (
  <Wrapper>
    <Sidebar />
    <Box flex="2" py="1.5rem" px="12rem">
      <Box pt="1rem" display="flex" justifyContent="flex-end">
        <MetricToggle />
      </Box>
      <Box mt="6rem">
        <ForecastDays />
      </Box>
    </Box>
  </Wrapper>
)

export default Dashboard;
