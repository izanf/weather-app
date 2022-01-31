import { Box, Input, Button, Icon } from 'components';
import SelectItems from './SelectItems';

interface ISearchModal {
  onClose: () => void;
};

const SearchModal = ({ onClose }: ISearchModal) => {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex" justifyContent="flex-end">
        <Icon name="close" onClick={onClose} cursor="pointer" />
      </Box>
      <Box display="flex" mt="3rem">
        <Input
          leftIcon="search"
          placeholder="search location"
          onChange={() => console.log('onChange')}
        />
        <Button ml="1rem" bg="blue">Search</Button>
      </Box>
      <Box mt="3rem">
        <SelectItems />
      </Box>
    </Box>
  )
};

export default SearchModal;
