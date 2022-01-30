import styled from 'styled-components';
import { space, SpaceProps, typography, TypographyProps } from 'styled-system';

interface ITextProps extends SpaceProps, TypographyProps {
  color?: string;
  noWrap?: boolean; 
}

const Text = styled.span<ITextProps>`
  font-family: 'Raleway';
  ${space}
  ${typography}
  color: ${({ theme, color }) => theme.colors[color ?? 'black']};
  ${({ noWrap }) => noWrap && 'white-space: nowrap;'};
`;

export default Text;
