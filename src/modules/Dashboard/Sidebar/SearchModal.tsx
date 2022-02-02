import React, { useState } from 'react';

import { useWeather } from 'hooks';

import { Box, Input, Button, Icon } from 'components';
import SelectItems from './SelectItems';

import { CityBasicInfo } from 'types/weather';

interface ISearchModal {
  onClose: () => void;
};

const SearchModal = ({ onClose }: ISearchModal) => {
  const { fetchSearch, fetchCityData } = useWeather();
  const [search, setSearch] = useState('');
  const [data, setData] = useState<CityBasicInfo[]>([]);

  const onSearch = async () => {
    const response = await fetchSearch(search);

    setData(response as CityBasicInfo[]);
  }

  const handleSelect = (selectedCity: CityBasicInfo): void => {
    fetchCityData(selectedCity.woeid);
    onClose();
  }

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
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        />
        <Button ml="1rem" bg="blue" onClick={onSearch}>Search</Button>
      </Box>
      <Box mt="3rem" overflow="auto">
        <SelectItems data={data} onSelect={handleSelect} />
      </Box>
    </Box>
  )
};

export default SearchModal;
