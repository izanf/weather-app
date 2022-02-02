import { Icon, Image, Button, Box, Text } from 'components';

import { GPSContainer } from './styles';

import { useWeather } from 'hooks';
import parseDate from 'utils/parseDate';

interface IMainContent {
  onSearch: () => void;
};

const MainContent = ({ onSearch }: IMainContent) => {
  const { cityInfo } = useWeather();
  const hasData = Object.keys(cityInfo).length;
  
  if (!hasData) return <span>Loading...</span>;
  
  const data = cityInfo?.consolidated_weather[0];

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Button weight="normal" onClick={onSearch}>Search for places</Button>
        <GPSContainer>
          <Icon name="gps_fixed" />
        </GPSContainer>
      </Box>
      <Box display="flex" justifyContent="center">
        <Image
          width="200px"
          src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
          alt={data.weather_state_name}
        />
      </Box>
      <Text fontSize="144px" color="grayLight" textAlign="center">
        {Math.round(data.the_temp)}
        <Text fontSize="48px" color="grayDark">°C</Text>
      </Text>
      <Text fontSize="36px" color="grayDark" textAlign="center">{data.weather_state_name}</Text>
      <Box display="flex" flexDirection="column">
        <Box display="flex" justifyContent="center">
          <Text color="grayDarker">Today</Text>
          <Text color="grayDarker" mx="1rem">•</Text>
          <Text color="grayDarker">{parseDate(data.applicable_date)}</Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
        >
          <Icon name="fmd_good" color="grayDarker" />
          <Text color="grayDarker" pl=".5rem">{cityInfo.title}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
