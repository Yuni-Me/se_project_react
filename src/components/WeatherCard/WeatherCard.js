import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";

const WeatherCard = ({ day = false, type = "Clear", weatherTemp = "" }) => {
  const imgSrc = weatherOptions.filter((image) => {
    return image.day === day && image.type === type;
  });

  const imgSrcUrl = imgSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp}° F</div>
      <img className="weather__image" src={imgSrcUrl} alt={type} />
    </section>
  );
};

export default WeatherCard;
