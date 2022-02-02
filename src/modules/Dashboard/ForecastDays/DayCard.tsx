import { Box, Image, Text } from 'components';

import { CityInfoWeather } from 'types/weather';

import parseDate from 'utils/parseDate';

interface IDayCard {
  data?: CityInfoWeather;
}

const DayCard: React.FC<IDayCard> = ({ data }) => {
  if (!data) return <span>Loading...</span>;

  return (
    <Box
      display="flex"
      flexDirection="column"
      bg="primaryLight"
      py="1.5rem"
    >
      <Text
        color="grayLight"
        textAlign="center"
      >{parseDate(data.applicable_date)}</Text>
      <Image
        mt="1rem"
        height="62px"
        src={`https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`}
        alt={data.weather_state_name}
        objectFit="contain"
      />
      <Box mt="2.5rem" display="flex" justifyContent="center">
        <Text color="grayLight">{Math.round(data.max_temp)}°C</Text>
        <Text color="grayDark" ml="1rem">{Math.round(data.min_temp)}°C</Text>
      </Box>
    </Box>
  );
};

export default DayCard;
