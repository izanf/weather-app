import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 2;
  background-color: ${props => props.theme.colors.primaryLight};
  padding: 2.5rem 3rem;
`;

export const GPSContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: ${props => props.theme.colors.gray};
`;