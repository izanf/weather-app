import ky from 'ky';

import { CityBasicInfo, CityInfo } from 'types/weather';

const BASE_URL = process.env.REACT_APP_WEATHER_API_URL;

const api = ky.create({
  prefixUrl: BASE_URL,
});

export const fetchWeather = async (search: string): Promise<CityBasicInfo[]> => {
  const response: CityBasicInfo[] = await api.get(`location/search/?query=${search}`).json();

  return response;
}

export const fetchCityData = async (cityId: number): Promise<CityInfo> => {
  const response: CityInfo = await api.get(`location/${cityId}`).json();

  return response;
};
