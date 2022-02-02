import { Box, Icon, Text } from 'components';
import HighlightCard from './HighlightCard';
import { WindDirection } from './styles';

interface IWindStatus {
  direction: number;
  compass: string;
  speed: number;
}

const WindStatus: React.FC<IWindStatus> = ({
  direction,
  compass,
  speed,
}) => (
  <HighlightCard label="Wind status">
    <Text
      fontSize="6rem"
      color="grayLight"
      fontWeight="bold"
    >
      {Math.round(speed)}
      <Text
        fontSize="3rem"
        color="grayLight"
        fontWeight="500"
      >mph</Text>
    </Text>
    <Box display="flex" alignItems="center" mt="2rem">
      <WindDirection
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="30px"
        height="30px"
        bg="gray"
        borderRadius="100%"
        mr="1rem"
        direction={direction}
      >
        <Icon fontSize="1rem" name="near_me" />
      </WindDirection>
      <Text color="grayLight" fontWeight="500">{compass}</Text>
    </Box>
  </HighlightCard>
);

export default WindStatus;
