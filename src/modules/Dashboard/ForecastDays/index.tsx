import { Box } from 'components';
import DayCard from './DayCard';

import { CityInfoWeather } from 'types/weather';

interface IForecastDays {
  data: CityInfoWeather[];
}

const ForecastDays: React.FC<IForecastDays> = ({ data }) => {
  if (!data) return <span>Loading...</span>;

  return (
    <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gridGap="2rem">
      {data.map((day) => <DayCard key={day.id} data={day} />)}
    </Box>
  );
};

export default ForecastDays;
