import styled from 'styled-components';

type IconProps = {
  name: string;
  color?: string;
}

const Span = styled.span<{ color?: string }>`
  color: ${({ theme, color }) => theme.colors[color ?? 'white']};
`;


const Icon = ({ name, color }: IconProps) => (
  <Span className="material-icons" color={color}>{name}</Span>
)

export default Icon;
