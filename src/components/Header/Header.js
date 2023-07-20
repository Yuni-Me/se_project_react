import "./Header.css";
import Avatar from "../../images/Avatar.svg";
import Logo from "../../images/Logo.svg";

const Header = ({ placeName, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-image">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header__info">
          {currentDate}, {placeName}
        </div>
      </div>
      <div className="header__avatar-logo">
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
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
