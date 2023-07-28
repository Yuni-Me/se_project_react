import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ placeName, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__info">
          {currentDate}, {placeName}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        <div>
          <button
            className="header__button"
            type="text"
            onClick={onCreateModal}
          >
            + Add Clothes
          </button>
        </div>
        <div className="header__name">Yunia Matamoros</div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
