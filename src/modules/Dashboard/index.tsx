import React from 'react';

import Sidebar from 'components/Sidebar';
import { Wrapper, Content } from './styles';

const Dashboard = () => (
  <Wrapper>
    <Sidebar />
    <Content>
      Content here
    </Content>
  </Wrapper>
)

export default Dashboard;
