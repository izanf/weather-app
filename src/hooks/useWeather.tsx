import { useState } from 'react';

import { CityBasicInfo } from 'types/weather';

import * as weatherService from 'services/weather';
import { ErrorHandler } from 'utils';

const useWeather = () => {
  const [selectedCity, setSelectedCity] = useState<CityBasicInfo>();

  const fetchSearch = async (search: string) => {
    try {
      const response = await weatherService.fetchWeather(search);

      return response;
    } catch (error) {
      if (typeof error === "string") {
        throw new Error(error.toUpperCase());
      } else if (error instanceof Error) {
        ErrorHandler(error)
      }

      return [];
    }
  }

  return {
    fetchSearch,
    setSelectedCity
  }
};

export default useWeather;
