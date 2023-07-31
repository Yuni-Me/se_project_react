import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import {
  getWeatherForecast,
  parseWeatherData,
  parseLocationData,
  parseWeatherBannerData,
} from "../../utils/weatherApi";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import Profile from "../Profile/Profile";
import api from "../../utils/api";
import { defaultClothingItems } from "../../utils/constants";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherBanner, setWeatherBanner] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleConfirmModal = () => {
    setActiveModal("confirm");
  };

  const onAddItem = (values) => {
    api
      .addItem(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleCardDelete = (id) => {
    api
      .removeItem(id)
      .then(() => {
        setClothingItems((cards) => cards.filter((card) => card.id !== id));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeatherForecast()
      .then((data) => {
        setTemp(parseWeatherData(data));
        setLocation(parseLocationData(data));
        setWeatherBanner(parseWeatherBannerData(data));
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    api
      .getItemList()
      .then((items) => setClothingItems(items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header placeName={location} onCreateModal={handleCreateModal} />
        <Switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              weatherBannerInfo={weatherBanner}
              onSelectCard={handleSelectedCard}
              onCardDelete={handleCardDelete}
              clothingItems={clothingItems}
            />
          </Route>
          <Route path="/profile">
            <Profile
              cards={clothingItems}
              onSelectedCard={handleSelectedCard}
              onAddNewClick={() => setActiveModal("create")}
            />
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleConfirmModal}
          />
        )}
        {activeModal === "confirm" && (
          <ConfirmModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onDelete={handleCardDelete}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
