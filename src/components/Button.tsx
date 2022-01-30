import styled from 'styled-components';

const Button = styled.button<{ fontSize?: string, weight?: string }>`
  font-family: 'Raleway';
  background: ${({ theme }) => theme.colors.gray};
  padding: .6rem 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ weight }) => weight ?? 'normal'};
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize ?? 'medium']};
`;

export default Button;
