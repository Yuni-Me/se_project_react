import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTempUnitContext } from "../../contexts/CurrentTempUnitContext";

const ToggleSwitch = () => {
  const { currentTempUnit, handleToggleSwitchChange } = useContext(
    CurrentTempUnitContext
  );

  return (
    <label className="switch">
      <input
        type="checkbox"
        className="switch__box"
        id="switch-box"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-C ${
          currentTempUnit === "C" && "switch__active"
        }`}
      >
        C
      </p>
      <p
        className={`switch__temp-F ${
          currentTempUnit === "F" && "switch__active"
        }`}
      >
        F
      </p>
    </label>
  );
};

export default ToggleSwitch;
