import { API_BASE, METEO_KEY, OPEN_WEATHER_API_KEY } from "./constants";

const unit = "imperial";

// const urlOne = `${API_BASE_ONE}?lat=${lat}&lon=${lon}&units=${unit}&appid=${OPEN_WEATHER_API_KEY}`;

const fetchWeather = ({ lat, lon }) => {
  const url = `${API_BASE}?lat=${lat}&lon=${lon}&units=${unit}&appid=${OPEN_WEATHER_API_KEY}`;
  return fetch(url).then((response) => response.json());
};

const meteoOptions = {
  method: "GET",
  url: "https://meteostat.p.rapidapi.com/stations/hourly",
  params: {
    station: "10637",
    start: "2020-01-01",
    end: "2020-01-01",
    tz: "Europe/Berlin",
  },
  headers: {
    "X-RapidAPI-Key": `${METEO_KEY}`,
    "X-RapidAPI-Host": "meteostat.p.rapidapi.com",
  },
};

const fetchClimate = () => {
  // curl --request GET \
  // --url 'https://meteostat.p.rapidapi.com/stations/meta?id=10637' \
  // --header 'x-rapidapi-host: meteostat.p.rapidapi.com' \
  // --header 'x-rapidapi-key: 5dd02800dfmsh128813f156d06b0p17aa41jsn2484f959d6ae'
  // return forecast/climate?lat={lat}&lon={lon}&appid={API key}
};

export { fetchWeather };
