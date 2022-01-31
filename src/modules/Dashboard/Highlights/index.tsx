import { Box } from 'components';
import AirPressure from './AirPressure';
import Humidity from './Humidity';
import Visibility from './Visibility';
import WindStatus from './WindStatus';

const Highlights = () => (
  <Box display="grid" gridTemplateColumns="1fr 1fr" gridGap="3rem">
    <WindStatus />
    <Humidity percentage={80} />
    <Visibility />
    <AirPressure />
  </Box>
);

export default Highlights;
