import Searchbar from '../Searchbar';
import Icon from 'components/Icon';
import Image from 'components/Image';
import Box from 'components/Box';
import Text from 'components/Text';

import { GPSContainer } from './styles';
 
const Sidebar = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    py="2.5rem"
    px="3rem"
    flex="1"
    bg="primaryLight"
  >
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Searchbar />
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
)

export default Sidebar;