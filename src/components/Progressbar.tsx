import styled from 'styled-components';
import Box from './Box';
import Text from './Text';

const Wrapper = styled(Box)`
  overflow: hidden;
`;

const Progress = styled(Box)``;

interface IProgressbar {
  percentage: number;
}

const Progressbar = ({ percentage }: IProgressbar) => (
  <Box>
    <Box display="flex" justifyContent="space-between" pb="0.2rem">
      <Text color="grayDark" fontWeight="bold" fontSize="0.9rem">0</Text>
      <Text color="grayDark" fontWeight="bold" fontSize="0.9rem">50</Text>
      <Text color="grayDark" fontWeight="bold" fontSize="0.9rem">100</Text>
    </Box>
    <Wrapper
      bg="grayLight"
      borderRadius="4px"
      width="230px"
      height="8px"
    >
      <Progress
        bg="yellow"
        width={`${percentage}%`}
        height="8px"
        borderRadius="4px"
      />
    </Wrapper>
    <Box display="flex" justifyContent="flex-end" pt="0.2rem">
      <Text color="grayDark" fontWeight="bold" fontSize="0.9rem">%</Text>
    </Box>
  </Box>
);

export default Progressbar;
