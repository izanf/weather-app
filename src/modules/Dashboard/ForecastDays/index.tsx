import { Box } from 'components';
import DayCard from './DayCard';

const ForecastDays = () => (
  <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gridGap="2rem">
    <DayCard />
    <DayCard />
    <DayCard />
    <DayCard />
    <DayCard />
  </Box>
)

export default ForecastDays;
