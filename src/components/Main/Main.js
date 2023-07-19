import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { defaultClothingItems } from "../../utils/constants";
import { useMemo } from "react";

function Main({ weatherTemp, weatherBannerInfo, onSelectCard }) {
  const weatherType = useMemo(() => {
    if (weatherTemp >= 86) {
      return "hot";
    } else if (weatherTemp >= 66 && weatherTemp <= 85) {
      return "warm";
    } else if (weatherTemp <= 65) {
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
        weatherTemp={weatherTemp}
      />
      <section className="card_section" id="card-section">
        Today is {weatherTemp}° F / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} key={item.id} onSelectCard={onSelectCard} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
