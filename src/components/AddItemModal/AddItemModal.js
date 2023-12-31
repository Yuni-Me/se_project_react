import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./AddItemModal.css";

const AddItemModal = ({ handleCloseModal, onAddItem }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weatherType, setWeatherType] = useState("hot");
  const handleWeatherChange = (e) => {
    setWeatherType(e.target.value);
  };

  const isEnabled =
    name.length > 0 && link.length > 0 && weatherType.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, imageUrl: link, weather: weatherType });
  };

  return (
    <ModalWithForm
      title="New Garment"
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
      buttonText="Add garment"
      isEnabled={!isEnabled}
      name="create"
    >
      <label className="modal__label">
        Name:
        <input
          type="text"
          className="modal__input"
          id="modal-name"
          name="name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image:
        <input
          type="url"
          className="modal__input"
          id="modal-link"
          name="link"
          placeholder="Image URL"
          minLength="1"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <p>Select the weather type:</p>

      <div className="modal__input-radios">
        <input
          className="modal__input-radio"
          type="radio"
          name="weatherType"
          id="weather-hot"
          value="hot"
          checked={weatherType === "hot"}
          onChange={handleWeatherChange}
        />
        <label htmlFor="weather-hot">Hot</label>
      </div>
      <div className="modal__input-radios">
        <input
          className="modal__input-radio"
          type="radio"
          name="weatherType"
          id="weather-warm"
          value="warm"
          checked={weatherType === "warm"}
          onChange={handleWeatherChange}
        />
        <label htmlFor="weather-warm">Warm</label>
      </div>
      <div className="modal__input-radios">
        <input
          className="modal__input-radio"
          type="radio"
          name="weatherType"
          id="weather-cold"
          value="cold"
          checked={weatherType === "cold"}
          onChange={handleWeatherChange}
        />
        <label htmlFor="weather-cold">Cold</label>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
