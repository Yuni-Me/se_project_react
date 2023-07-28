import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

function Main({ weatherTemp, weatherBannerInfo, onSelectCard }) {
  const { currentTempUnit } = useContext(CurrentTempUnitContext);
  console.log(currentTempUnit);
  const temp = weatherTemp?.temp?.[currentTempUnit] || 999;
  const weatherType = useMemo(() => {
    if (temp >= 86) {
      return "hot";
    } else if (temp >= 66 && temp <= 85) {
      return "warm";
    } else if (temp <= 65) {
      return "cold";
    }
  }, [weatherTemp]);

  const filteredCards = defaultClothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });
  const dayOrNight = useMemo(() => {
    const currentTime = Date.now() / 1000;
    const sunrise = weatherBannerInfo[0];
    const sunset = weatherBannerInfo[1];
    return currentTime > sunrise && currentTime < sunset;
  });

  return (
    <main className="main">
      <WeatherCard
        day={dayOrNight}
        type={weatherBannerInfo[2]}
        weatherTemp={temp}
      />
      <section className="main__section" id="card-section">
        Today is {temp}° {currentTempUnit} / You may want to wear:
        <div className="main__cards">
          {filteredCards.map((item) => (
            <ItemCard
              item={item}
              key={item.id || item._id}
              onSelectCard={onSelectCard}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
