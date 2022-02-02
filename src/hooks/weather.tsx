import { createContext, useState, useContext } from 'react';

import { CityBasicInfo, CityInfo } from 'types/weather';

import * as weatherService from 'services/weather';
import { ErrorHandler } from 'utils';

interface IWeatherContext {
  cityInfo: CityInfo;
  fetchSearch: (search: string) => Promise<CityBasicInfo[]> | void;
  fetchCityData: (cityId: number) => Promise<CityInfo | null> | null;
}

const DEFAULT_VALUE = {
  cityInfo: {} as CityInfo,
  fetchSearch: () => {},
  fetchCityData: () => null,
}

export const WeatherContext = createContext<IWeatherContext>(DEFAULT_VALUE);

export const WeatherContextProvider: React.FC = ({ children }) => {
  const [cityInfo, setCityInfo] = useState<CityInfo>(DEFAULT_VALUE.cityInfo);

  const fetchSearch = async (search: string) => {
    try {
      const response = await weatherService.fetchWeather(search);

      return response;
    } catch (error) {
      if (typeof error === "string") {
        throw new Error(error.toUpperCase());
      } else if (error instanceof Error) {
        ErrorHandler(error);
      }

      return [];
    }
  }

  const fetchCityData = async (cityId: number) => {
    try {
      const response: CityInfo = await weatherService.fetchCityData(cityId);

      setCityInfo(response);

      return response;
    } catch (error) {
      if (typeof error === "string") {
        throw new Error(error.toUpperCase());
      } else if (error instanceof Error) {
        ErrorHandler(error)
      }

      return null;
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        cityInfo,
        fetchSearch,
        fetchCityData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
};

const useWeather = () => useContext(WeatherContext);

export default useWeather;