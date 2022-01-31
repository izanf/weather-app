import { space, SpaceProps } from 'styled-system';
import styled from 'styled-components';

interface IButton extends SpaceProps {
  fontSize?: string;
  weight?: string;
  bg?: string;
}

const Button = styled.button<IButton>`
  font-family: 'Raleway';
  background: ${({ theme, bg }) => theme.colors[bg ?? 'gray']};
  padding: .6rem 1rem;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ weight }) => weight ?? 'normal'};
  font-size: ${({ theme, fontSize }) => theme.fontSize[fontSize ?? 'medium']};
  cursor: pointer;
  ${space}
`;

export default Button;
