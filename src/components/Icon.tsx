import { typography, TypographyProps } from 'styled-system';

import styled from 'styled-components';

interface IIconProps extends TypographyProps {
  name: string;
  color?: string;
}

const Span = styled.span<Partial<IIconProps>>`
  color: ${({ theme, color }) => theme.colors[color ?? 'white']};
  ${typography}
`;


const Icon = ({ name, color, ...props }: IIconProps) => (
  <Span className="material-icons" color={color} {...props}>{name}</Span>
)

export default Icon;
