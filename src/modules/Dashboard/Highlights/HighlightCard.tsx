import { Box, Text } from 'components';

interface IHighlightCard {
  label: string;
  children: React.ReactNode;
};

const HighlightCard = ({ label, children }: IHighlightCard) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    backgroundColor="primaryLight"
    p="1.4rem"
  >
    <Text color="grayLight">{label}</Text>
    <Box
      pt="1rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {children}
    </Box>
  </Box>
);

export default HighlightCard;