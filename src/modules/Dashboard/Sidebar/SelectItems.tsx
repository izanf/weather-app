import styled from 'styled-components';
import { Box, Icon, Text } from 'components';
import { CityBasicInfo } from 'types/weather';

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
interface ISelectItems {
  data?: CityBasicInfo[] | [];
  onSelect: (item: CityBasicInfo) => void;
}

const SelectItems: React.FC<ISelectItems> = ({ data = [], onSelect }) => {
  return (
    <Box>
      {data.map(item => {
        return (
          <ItemWrapper
            key={item?.woeid}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            border="1px solid"
            borderColor="transparent"
            p="1rem"
            mb="0.5rem"
            cursor="pointer"
            onClick={() => onSelect(item)}
          >
            <Text color="grayLight">{item?.title}</Text>
            <Icon name="chevron_right" color="grayy" fontSize="1rem" />
          </ItemWrapper>
        )}
      )}
    </Box>
  )
}

export default SelectItems;
