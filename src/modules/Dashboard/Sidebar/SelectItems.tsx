import styled from 'styled-components';
import { Box, Icon, Text } from 'components';

const items = [
  {
    id: 1,
    name: 'London',
    value: 'london'
  },
  {
    id: 2,
    name: 'Barcelona',
    value: 'barcelona'
  },
  {
    id: 3,
    name: 'Long Beach',
    value: 'long_beach'
  },
  
];

const ItemWrapper = styled(Box)`
  .material-icons {
    display: none;
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.grayy};

    .material-icons {
      display: block;
    }
  }
`;

const SelectItems = () => {
  return (
    <Box>
      {items.map(item => {
        return (
          <ItemWrapper
            key={item?.id}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid"
            borderColor="transparent"
            p="1rem"
            mb="0.5rem"
            cursor="pointer"
          >
            <Text color="grayLight">{item?.name}</Text>
            <Icon name="chevron_right" color="grayy" fontSize="1rem" />
          </ItemWrapper>
        )}
      )}
    </Box>
  )
}

export default SelectItems;
