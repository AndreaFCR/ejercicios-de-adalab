import React from "react";
import "../stylesheets/main.scss";

function Main() {
  return (
    <div className="main">
      <form className="main__form">
        <input type="text" className="main__form__input js-input" />
        <button className="main__form__button--search js-searchBtn">
          Buscar
        </button>
      </form>
      <div className="main__container--title js-searchTitle"></div>
      <div className="main__container--search js-searchContainer"></div>
      <div className="main__container--fav js-favContainer"></div>
    </div>
  );
}

export default Main;
