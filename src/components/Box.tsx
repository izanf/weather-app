import styled from 'styled-components';
import {
  flexbox, FlexboxProps, layout, LayoutProps, grid, GridProps,
  space, SpaceProps, color, ColorProps, border, BorderProps,
  position, PositionProps
} from 'styled-system';

interface IBoxProps extends FlexboxProps, LayoutProps, GridProps, SpaceProps, ColorProps, BorderProps, PositionProps {
  cursor?: string;
}

const Box = styled.div<IBoxProps>`
  ${flexbox};
  ${layout};
  ${grid}
  ${space};
  ${color};
  ${border};
  ${position};
  cursor: ${({ cursor }) => cursor ?? 'default'};
`;

export default Box;
