import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import {
  getWeatherForecast,
  parseWeatherData,
  parseLocationData,
  parseWeatherBannerData,
} from "../../utils/weatherApi";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [location, setLocation] = useState("");
  const [weatherBanner, setWeatherBanner] = useState([]);

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

  useEffect(() => {
    getWeatherForecast().then((data) => {
      setTemp(parseWeatherData(data));
      setLocation(parseLocationData(data));
      setWeatherBanner(parseWeatherBannerData(data));
    });
  }, []);

  return (
    <div className="page">
      <Header placeName={location} onCreateModal={handleCreateModal} />
      <Main
        weatherTemp={temp}
        weatherBannerInfo={weatherBanner}
        onSelectCard={handleSelectedCard}
      />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label className="modal__label">
            Name:
            <input
              type="text"
              className="modal__input"
              name="name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
            />
          </label>
          <label className="modal__label">
            Image:
            <input
              type="url"
              className="modal__input"
              name="link"
              placeholder="Image URL"
              minLength="1"
              maxLength="30"
            />
          </label>
          <p>Select the weather type:</p>

          <div className="modal__input-radios modal__input-radios_checked">
            <input
              className="modal__input-radio"
              type="radio"
              id="hot"
              value="hot"
              checked
            />
            <label>Hot</label>
          </div>
          <div className="modal__input-radios">
            <input
              className="modal__input-radio"
              type="radio"
              id="warm"
              value="warm"
            />
            <label>Warm</label>
          </div>
          <div className="modal__input-radios">
            <input
              className="modal__input-radio"
              type="radio"
              id="cold"
              value="cold"
            />
            <label>Cold</label>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
