import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import image from "../../images/dogs1.jpg";
import image2 from "../../images/dogs47.png";
import image3 from "../../images/dogs2.jpg";

function Main() {
  return (
    <>
      <Header
        title="уважаемый друг!"
        subtitle="Если вы оказались на этой странице, это означает, что вы - истинный
          ценитель животных. Наш сайт - это не просто торговая площадка или
          место для хранения фотографий, здесь вы найдете много больше!"
      />
      <main>
        <nav>
          <Link to="/home/hello-user" className="navigation__link">
            <img className="navigation__image" src={image} alt="картинка"></img>
            <p className="navigation__link-text">Для Заводчиков</p>
          </Link>
          <Link to="/home/hello-buyer" className="navigation__link">
            <img
              className="navigation__image"
              src={image2}
              alt="картинка"
            ></img>
            <p className="navigation__link-text">Для Пользователей</p>
          </Link>
          <Link to="/home/hello-breeder" className="navigation__link">
            <img
              className="navigation__image"
              src={image3}
              alt="картинка"
            ></img>
            <p className="navigation__link-text">Для Гостей</p>
          </Link>
        </nav>
      </main>
    </>
  );
}

export default Main;
