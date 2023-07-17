import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imgSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  //   console.log(imgSrc);
  const imgSrcUrl = imgSrc[0].url || "";
  //   console.log(imgSrcUrl);
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}</div>
      <img className="weather__image" src={imgSrcUrl} alt="Weather" />
    </section>
  );
};

export default WeatherCard;
// src\images\Avatar.svg
// E:\Projects\Practicum\Sprint10\se_project_react\src\images\night\cloudy.svg
// src\components\WeatherCard\WeatherCard.js
// src\images\night\cloudy.svg
