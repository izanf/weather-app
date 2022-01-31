import { typography, TypographyProps } from 'styled-system';

import styled from 'styled-components';

interface IIconProps extends TypographyProps {
  name: string;
  color?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  cursor?: string;
}

const Span = styled.span<Partial<IIconProps>>`
  color: ${({ theme, color }) => theme.colors[color ?? 'white']};
  cursor: ${({ cursor }) => cursor};
  ${typography}
`;


const Icon = ({ name, color, ...props }: IIconProps) => (
  <Span className="material-icons" color={color} {...props}>{name}</Span>
)

export default Icon;
