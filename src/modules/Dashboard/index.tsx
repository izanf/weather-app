import React from 'react';

import Sidebar from './Sidebar';
import Box from 'components/Box';
import MetricToggle from './MetricToggle';
import { Wrapper } from './styles';

const Dashboard = () => (
  <Wrapper>
    <Sidebar />
    <Box flex="2.5" py="1.5rem" px="3rem">
      <Box pt="1rem" display="flex" justifyContent="flex-end">
        <MetricToggle />
      </Box>
    </Box>
  </Wrapper>
)

export default Dashboard;
