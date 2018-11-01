import axios from "axios";
const API_KEY = "dd94bd7476ad5690add1313c5facc4a4";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},tr`;
  const request = axios.get(url);
  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}
