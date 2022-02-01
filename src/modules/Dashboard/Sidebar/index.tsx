import { useState } from 'react';
import { Box } from 'components';
import MainContent from './MainContent';
import SearchModal from './SearchModal';

const Sidebar = () => {
  const [isShowSearch, setShowSearch] = useState(false);

  return (
    <Box
      display="flex"
      py="2.5rem"
      px="3rem"
      flex="1"
      bg="primaryLight"
      overflow="hidden"
    >
      {isShowSearch ? <SearchModal onClose={() => setShowSearch(false)} /> : <MainContent onSearch={() => setShowSearch(true)} />}
    </Box>
  )
}

export default Sidebar;