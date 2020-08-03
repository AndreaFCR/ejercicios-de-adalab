import React from "react";
import "../stylesheets/header.scss";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">Buscador de series</h1>
      </div>
    );
  }
}

export default Header;
