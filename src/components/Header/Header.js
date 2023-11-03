import { React } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import image from "../../images/bb_logo.png";

function Header({ title, subtitle }) {
  return (
    <header className="header">
      <img src={image} className="App-logo" alt="logo" />
      <h1>
        Добро пожаловать,
        <br />
        {title}
      </h1>
      <p className="header__subtitle">{subtitle}</p>
      <div className="header__buttons-container">
        <Link to="/signup" className="header__button">
          Регистрация
        </Link>
        <Link to="/signin" className="header__button header__button-green">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
