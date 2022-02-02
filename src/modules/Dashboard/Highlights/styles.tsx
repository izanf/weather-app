import styled from 'styled-components';

import { Box } from 'components';

export const WindDirection = styled(Box)<{ direction: number }>`
  transform: rotate(${({ direction }) => direction - 45}deg);
`;
