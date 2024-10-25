import "./Header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  currentTemperatureUnit,
  handleToggleSwitchChange,
  handleSignupClick,
  handleLoginClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  if (isLoggedIn === true) {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="Logo" />
        </Link>

        <p className="header__date-and-location">
          {currentDate}, {weatherData.city}
        </p>
        <div className="header__actions">
          <ToggleSwitch
            currentTemperatureUnit={currentTemperatureUnit}
            handleToggleSwitchChange={handleToggleSwitchChange}
          />

          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add Clothes
          </button>

          <div className="header__user-container">
            <Link to="/profile" className="header__link">
              <p className="header__username">Demet Yildirim</p>
              <img
                src={currentUser.avatar}
                alt="Terrence Tegegne"
                className="header__avatar"
              />
            </Link>
          </div>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
        <p className="header__date-location">
          {currentDate}, {weatherData.city}
        </p>
        <div className="header__actions">
          <ToggleSwitch />
        </div>
        <button onClick={handleSignupClick} className="header__signup">
          Sign Up
        </button>
        <button onClick={handleLoginClick} className="header__login">
          Log In
        </button>
      </header>
    );
  }
}

export default Header;
