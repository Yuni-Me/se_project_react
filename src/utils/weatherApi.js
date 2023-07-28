import { APIkey, latitude, longitude } from "./constants";

export const getWeatherForecast = () => {
  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temp = main && main.temp;
  const weather = {
    temp: {
      F: Math.round(temp),
      C: Math.round(((data.main.temp - 32) * 5) / 9),
    },
  };
  console.log(weather);
  return weather;
};

export const parseLocationData = (data) => {
  const location = data.name;
  return location;
};

export const parseWeatherBannerData = (data) => {
  const sunrise = data.sys.sunrise;
  const sunset = data.sys.sunset;
  const weatherType = data.weather[0].main;
  const weatherInfo = [sunrise, sunset, weatherType];
  return weatherInfo;
};

// weather.temp.F = `${Math.round(data.main.temp)}° F`;
// weather.temp.C = `${Math.round((data.main.temp - 32) * 5/9)}° C`;
