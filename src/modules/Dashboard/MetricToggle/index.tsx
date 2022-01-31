import { useState } from 'react';

import { Box, Text } from 'components';

type OptionType = {
  label: string;
  value: number;
}

const MetricToggle = () => {
  const [active, setActive] = useState(1);

  const options: OptionType[] = [
    {
      label: '°C',
      value: 1,
    },
    {
      label: '°F',
      value: 2,
    },
  ];

  return (
    <Box display="flex">
      {options.map((option, index) => (
        <Box
          key={option.value}
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="40px"
          height="40px"
          bg={active === option.value ? 'grayLight' : 'grayDarkest'}
          borderRadius="100%"
          onClick={() => setActive(option.value)}
          cursor="pointer"
          ml={!!index ? '.5rem' : 0}
        >
          <Text color={active === option.value ? 'grayDarkest' : 'grayLight'} fontWeight="bold">
            {option.label}
          </Text>
        </Box>
      ))}
    </Box>  
  );
};

export default MetricToggle;
