import React from 'react';

import Sidebar from './Sidebar';
import Box from 'components/Box';
import { Wrapper } from './styles';

const Dashboard = () => (
  <Wrapper>
    <Sidebar />
    <Box flex="2.5" py="1.5rem" px="3rem">
      Content here
    </Box>
  </Wrapper>
)

export default Dashboard;
