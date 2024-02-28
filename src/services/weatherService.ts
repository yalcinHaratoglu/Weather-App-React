import { DateTime } from 'luxon';
import axios, { AxiosResponse } from 'axios';
import {
  WeatherData,
  FormattedCurrentWeather,
  FormattedForecastWeather,
} from '../interfaces/interface';
//Interfaces for the weather data

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

type SearchParams = {
  [key: string]: string | number;
};

//Function to get the weather data to make the API call
const getWeatherData = async (
  infoType: string,
  searchParams: SearchParams
): Promise<WeatherData> => {
  //Creating the URL for the API call
  const url = `${BASE_URL}/${infoType}`;
  const params = {
    ...searchParams,
    appid: API_KEY,
  };

  try {
    //Fetching the weather data using axios
    const response: AxiosResponse<WeatherData> = await axios.get(url, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

//Function to format the current weather data
const formatCurrentWeather = (data: WeatherData): FormattedCurrentWeather => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
    visibility,
  } = data;

  const { main: details, icon } = weather[0];

  return {
    sys: { country, sunrise, sunset },
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    visibility,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

//Function to format the forecast weather data
const formatForecastWeather = (data: WeatherData): FormattedForecastWeather => {
  const { timezone } = data;
  let { daily, hourly } = data;
  //Formatting the daily and hourly forecast data
  daily = daily.slice(1, 7).map((d: any) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp?.day,
      icon: d.weather[0].icon,
      details: d.weather[0].main,
    };
  });

  hourly = hourly.slice(1, 7).map((d: any) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp,
      icon: d.weather[0].icon,
      details: d.weather[0].main,
    };
  });

  return { timezone, daily, hourly };
};

//We have to API call and I combined the two API calls into one function: (getFormattedWeatherData)
const getFormattedWeatherData = async (
  searchParams: SearchParams
): Promise<FormattedCurrentWeather & FormattedForecastWeather> => {
  try {
    //Fetching the current weather data and formatting it
    const formattedCurrentWeather = await getWeatherData(
      'weather',
      searchParams
    ).then(formatCurrentWeather);

    const { lat, lon } = formattedCurrentWeather;

    //Fetching the forecast weather data and formatting it
    const formattedForecastWeather = await getWeatherData('onecall', {
      lat,
      lon,
      exclude: 'current,minutely,alerts',
      units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
  } catch (error) {
    console.error('Error getting formatted weather data', error);
    throw error;
  }
};

//Function to format the time to local time using laxon (DateTime)
const formatToLocalTime = (
  secs: number,
  zone: string,
  format: string = "cccc dd LLL', 'hh:mm a" //Default format
): string => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

//Function to get the icon URL from the icon code
const iconUrlFromCode = (code: string): string =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;

//Exporting the functions
export default getFormattedWeatherData;

//Exporting the functions
export { formatToLocalTime, iconUrlFromCode };
