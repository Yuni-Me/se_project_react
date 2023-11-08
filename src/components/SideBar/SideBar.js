import React from "react";
import "./SideBar.css";
// import avatar from "../../images/avatar.svg";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const SideBar = () => {
  const currentUser = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : undefined;
  return (
    <div className="sideBar">
      <img src={avatar} alt="avatar" className="sideBar__avatar" />
      <p className="sideBar__name">{currentUser?.name}</p>
    </div>
  );
};

export default SideBar;

{
  /* <Link to="/profile" className="header__link">
              <div className="header__name">{currentUser?.name}</div>
            </Link>
            <div>
              {showAvatar ? (
                <img className="avatar__image" src={avatar} alt="avatar" />
              ) : (
                <p className="avatar__placeholder">{name[0]?.toUpperCase()}</p>
              )}
            </div> */
}
