import React from "react";
import "../stylesheets/filters.scss";

const Filters = (props) => {
  // le he pasado por props la función en la que recoge el valor del check y del input.el manejo del handler se hace en el componente principal
  return (
    <form className="form">
      <label htmlFor="search">Filtrar por nombre: </label>
      <input
        name="name"
        id="name"
        type="text"
        onChange={props.handleChangeInput}
        value={props.nameFilter}
      />
      <label htmlFor="check"> Está en emisión: </label>
      <input
        name="check"
        id="check"
        type="checkbox"
        onChange={props.handleCheck}
      />
    </form>
  );
};

export default Filters;
