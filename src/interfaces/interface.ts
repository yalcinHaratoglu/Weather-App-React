export interface Coordinates {
  lat: number;
  lon: number;
}

export interface MainData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  pressure: number;
}

export interface SystemData {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Weather {
  main: string;
  icon: string;
}

export interface Wind {
  speed: number;
}

export interface WeatherData {
  coord: Coordinates;
  main: MainData;
  name: string;
  timezone: string;
  dt: number;
  visibility: number;
  country: string;
  sys: { country: string; sunrise: number; sunset: number };
  weather: Weather[];
  wind: Wind;
  daily: DailyForecast[];
  hourly: DailyForecast[];
  icon: string;
  details: string;
  feels_like: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface DailyForecast {
  dt?: number;
  title?: string;
  temp?: number;
  icon?: string;
  image?: string;
  details?: string;
}

export interface FormattedCurrentWeather {
  lat: number;
  lon: number;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  visibility: number;
  pressure: number;
  name: string;
  dt: number;
  sys: { country: string; sunrise: number; sunset: number };
  country: string;
  sunrise: number;
  sunset: number;
  details: string;
  icon: string;
  speed: number;
}

export interface FormattedForecastWeather {
  timezone: string;
  daily: DailyForecast[];
  hourly: DailyForecast[];
  weather: Weather[];
  details: string;
}

export interface WeatherDetails {
  details: string;
  icon: string;
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
  humidity: number;
  speed: number;
  sunrise: number;
  sunset: number;
  timezone: string;
  pressure: number;
  visibility: number;
}
