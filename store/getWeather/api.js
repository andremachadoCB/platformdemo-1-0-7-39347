import axios from "axios"
const getWeather = axios.create({
  baseURL: "https://api.openweathermap.org",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function getweather_get_data_25_weather_read(payload) {
  return getWeather.get(`/data/2.5/weather`, {
    params: { q: payload.q, appid: payload.appid }
  })
}
export const apiService = { getweather_get_data_25_weather_read }
