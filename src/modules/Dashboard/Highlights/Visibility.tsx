import HighlightCard from "./HighlightCard"

import { Text } from 'components';

const Visibility = () => (
  <HighlightCard label="Visibility">
    <Text
      fontSize="6rem"
      color="grayLight"
      fontWeight="bold"
    >
      6,4
      <Text
        fontSize="3rem"
        color="grayLight"
        fontWeight="500"
      > miles</Text>
    </Text>
  </HighlightCard>
)

export default Visibility;
