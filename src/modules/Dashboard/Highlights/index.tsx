import { Box } from 'components';
import AirPressure from './AirPressure';
import Humidity from './Humidity';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

import { useWeather } from 'hooks';

const Highlights = () => {
  const { cityInfo } = useWeather();
  const hasData = Object.keys(cityInfo).length;

  if (!hasData) return <span>Loading...</span>;

  const data = cityInfo?.consolidated_weather[0];

  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="3rem">
      <WindStatus
        direction={data.wind_direction} 
        compass={data.wind_direction_compass}
        speed={data.wind_speed}
      />
      <Humidity percentage={data.humidity} />
      <Visibility visibility={data.visibility} />
      <AirPressure pressure={data.air_pressure} />
    </Box>
  );
};

export default Highlights;
