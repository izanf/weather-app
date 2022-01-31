import { Box, Icon, Text } from 'components';
import HighlightCard from './HighlightCard';

const WindStatus = () => (
  <HighlightCard label="Wind status">
      <Text
        fontSize="6rem"
        color="grayLight"
        fontWeight="bold"
      >
        7
        <Text
          fontSize="3rem"
          color="grayLight"
          fontWeight="500"
        >mph</Text>
      </Text>
      <Box display="flex" alignItems="center" mt="2rem">
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30px"
          height="30px"
          bg="gray"
          borderRadius="100%"
          mr="1rem"
        >
          <Icon fontSize="1rem" name="near_me" />
        </Box>
        <Text color="grayLight" fontWeight="500">WSW</Text>
      </Box>
    </HighlightCard>
);

export default WindStatus;