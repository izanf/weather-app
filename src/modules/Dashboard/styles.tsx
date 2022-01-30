import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary}}
`;

export const Content = styled.div`
  flex: 4;
`;