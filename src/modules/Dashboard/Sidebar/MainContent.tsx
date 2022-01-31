import { Icon, Image, Button, Box, Text } from 'components';

import { GPSContainer } from './styles';

interface IMainContent {
  onSearch: () => void;
};

const MainContent = ({ onSearch }: IMainContent) => (
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
      <Image width="200px" name="shower" alt="testew" />
    </Box>
    <Text fontSize="144px" color="grayLight" textAlign="center">
      15
      <Text fontSize="48px" color="grayDark">°C</Text>
    </Text>
    <Text fontSize="36px" color="grayDark" textAlign="center">Shower</Text>
    <Box display="flex" flexDirection="column">
      <Box display="flex" justifyContent="center">
        <Text color="grayDarker">Today</Text>
        <Text color="grayDarker" mx="1rem">•</Text>
        <Text color="grayDarker">Fri, 5 Jun</Text>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="2rem"
      >
        <Icon name="fmd_good" color="grayDarker" />
        <Text color="grayDarker" pl=".5rem">Helsinki</Text>
      </Box>
    </Box>
  </Box>
);

export default MainContent;
