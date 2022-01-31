import { Box, Image, Text } from 'components';

const DayCard = () => (
  <Box
    display="flex"
    flexDirection="column"
    bg="primaryLight"
    py="1.5rem"
  >
    <Text
      color="grayLight"
      textAlign="center"
    >Tomorrow</Text>
    <Image
      mt="1rem"
      height="62px"
      name="lightCloud"
      alt="tomororw"
      objectFit="contain"
    />
    <Box mt="2.5rem" display="flex" justifyContent="center">
      <Text color="grayLight">16°C</Text>
      <Text color="grayDark" ml="1rem">11°C</Text>
    </Box>
  </Box>
)

export default DayCard;
