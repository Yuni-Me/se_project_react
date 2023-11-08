import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const Header = ({
  placeName,
  onCreateModal,
  onLogInModal,
  onSignUpModal,
  loggedIn,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const avatar = currentUser ? currentUser.avatar : undefined;
  const showAvatar = avatar !== "" ? true : false;
  const name = currentUser ? currentUser.name : "";

  return (
    <header className="header">
      <div className="header__logo">
        <div className="header__logo-image">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="header__info">
          {currentDate}, {placeName}
        </div>
      </div>
      <div className="header__avatar-logo">
        <ToggleSwitch />
        {loggedIn ? (
          <>
            <div>
              <button
                className="header__button"
                type="text"
                onClick={onCreateModal}
              >
                + Add Clothes
              </button>
            </div>
            <Link to="/profile" className="header__link">
              <div className="header__name">{currentUser?.name}</div>
            </Link>
            <div>
              {showAvatar ? (
                <img className="avatar__image" src={avatar} alt="avatar" />
              ) : (
                <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
              )}
            </div>
          </>
        ) : (
          <>
            {" "}
            <button className="header__nav-button" onClick={onSignUpModal}>
              Sign Up
            </button>
            <button className="header__nav-button" onClick={onLogInModal}>
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
