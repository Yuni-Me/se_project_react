import "./Header.css";
import Avatar from "../../images/Avatar.svg";
import Logo from "../../images/Logo.svg";

const Header = () => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <div>
          {currentDate}, {}
        </div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button className="header__button" type="text">
            + Add Clothes
          </button>
        </div>
        <div>Yunia Matamoros</div>
        <div>
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
