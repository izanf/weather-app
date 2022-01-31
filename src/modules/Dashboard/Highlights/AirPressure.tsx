import HighlightCard from "./HighlightCard"
import { Text } from 'components';

const AirPressure = () => (
  <HighlightCard label="Air Pressure">
    <Text
      fontSize="6rem"
      color="grayLight"
      fontWeight="bold"
    >
      998
      <Text
        fontSize="3rem"
        color="grayLight"
        fontWeight="500"
      > mb</Text>
    </Text>
  </HighlightCard>
)

export default AirPressure;
