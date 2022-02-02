import HighlightCard from "./HighlightCard"

import { Text } from 'components';

interface IVisibility {
  visibility: number;
}

const Visibility: React.FC<IVisibility> = ({ visibility }) => (
  <HighlightCard label="Visibility">
    <Text
      fontSize="6rem"
      color="grayLight"
      fontWeight="bold"
    >
      {visibility.toFixed()}
      <Text
        fontSize="3rem"
        color="grayLight"
        fontWeight="500"
      > miles</Text>
    </Text>
  </HighlightCard>
);

export default Visibility;
