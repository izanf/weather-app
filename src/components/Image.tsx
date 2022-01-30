import styled from 'styled-components';
import { layout, LayoutProps, space, SpaceProps } from 'styled-system';

import * as images from 'assets/images';

interface IFigureProps extends LayoutProps, SpaceProps {
}

const Figure = styled.figure<IFigureProps>`
  display: flex;
  align-items: center;
  overflow: hidden;
  ${layout}
  ${space}
  ${({ onClick }) => (onClick ? 'cursor: pointer;' : '')}

  & > div {
    width: 100%;
  }
`;

const Img = styled.img<{ objectFit?: string }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ objectFit }) => objectFit};
`;

type ImageProps = {
  name?: string;
  src?: string;
  alt: string;
  objectFit?: string;
  width?: string;
  height?: string;
}

const Image = ({
  name, src, alt, objectFit, ...props
}: ImageProps) => {
  return (
    <Figure {...props}>
      <Img
        // @ts-ignore
        src={name ? images[name ?? 'clear'] : src}
        alt={alt}
        objectFit={objectFit}
      />
    </Figure>
  );
};

export default Image;
