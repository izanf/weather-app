import { Box, Progressbar, Text } from "components";
import HighlightCard from "./HighlightCard"

interface IHumidity {
  percentage: number;
}

const Humidity = ({ percentage }: IHumidity) => (
  <HighlightCard label="Humidity">
    <Text
      fontSize="6rem"
      color="grayLight"
      fontWeight="bold"
    >
      {percentage}
      <Text
        fontSize="3rem"
        color="grayLight"
        fontWeight="normal"
      > %</Text>
    </Text>
    <Box mt="1rem">
      <Progressbar percentage={percentage} />
    </Box>
  </HighlightCard>
)

export default Humidity;
