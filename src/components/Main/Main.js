import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo, useContext } from "react";
import "./Main.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  weatherBannerInfo,
  onSelectCard,
  clothingItems = defaultClothingItems,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temp?.[currentTemperatureUnit] || 999;

  const weatherType = useMemo(() => {
    if (currentTemperatureUnit === "F") {
      if (temp >= 86) {
        return "hot";
      } else if (temp >= 66 && temp <= 85) {
        return "warm";
      } else if (temp <= 65) {
        return "cold";
      }
    }
    if (currentTemperatureUnit === "C") {
      if (temp >= 30) {
        return "hot";
      } else if (temp >= 19 && temp <= 29) {
        return "warm";
      } else if (temp <= 18) {
        return "cold";
      }
    }
  }, [temp]);

  const filteredCards = clothingItems.filter((item) => {
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
        Today is {temp}°{currentTemperatureUnit} / You may want to wear:
        <div className="main__cards">
          {filteredCards.map((item) => {
            return (
              <ItemCard
                item={item}
                key={item?.id || item?._id}
                onSelectCard={onSelectCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
