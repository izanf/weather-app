import Sidebar from './Sidebar';
import { Box, Text } from 'components';
import MetricToggle from './MetricToggle';
import ForecastDays from './ForecastDays';
import Highlights from './Highlights';
import { Wrapper } from './styles';
import { useWeather } from 'hooks';
import { useEffect } from 'react';

const Dashboard = () => {
  const { cityInfo, fetchCityData } = useWeather();
  const forecastDaysData = cityInfo?.consolidated_weather?.slice(1);

  useEffect(() => {
    fetchCityData(44418);
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <Box flex="2" py="1.5rem" px="12rem">
        <Box pt="1rem" display="flex" justifyContent="flex-end">
          <MetricToggle />
        </Box>
        <Box mt="4rem">
          <ForecastDays data={forecastDaysData} />
        </Box>
        <Box mt="4rem">
          <Text fontSize="1.5rem" fontWeight="bold" color="grayLight">Today's Highlights</Text>
          <Box mt="2rem">
            <Highlights />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  )
};

export default Dashboard;
