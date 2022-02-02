import HighlightCard from "./HighlightCard"
import { Text } from 'components';

interface IAirPressure {
  pressure: number;
}

const AirPressure: React.FC<IAirPressure> = ({ pressure }) => (
  <HighlightCard label="Air Pressure">
    <Text
      fontSize="6rem"
      color="grayLight"
      fontWeight="bold"
    >
      {pressure}
      <Text
        fontSize="3rem"
        color="grayLight"
        fontWeight="500"
      > mb</Text>
    </Text>
  </HighlightCard>
)

export default AirPressure;
