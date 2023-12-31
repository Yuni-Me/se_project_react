import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day = false, type = "Clear", weatherTemp = "" }) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imgSrc = weatherOptions.filter((image) => {
    if (image.type.includes(type)) {
      return image.day === day && image.type === type;
    }
  });

  const imgSrcUrl = imgSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img className="weather__image" src={imgSrcUrl} alt={type} />
    </section>
  );
};

export default WeatherCard;

//° F
