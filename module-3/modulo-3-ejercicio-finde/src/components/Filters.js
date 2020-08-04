import React from "react";
import "../stylesheets/filters.scss";

const Filters = (props) => {
  // le he pasado por props la función en la que recoge el valor del check y del input. Es recomendable pasar los datos limpios. REcogemos los eventos y los pasamos como valores ( value y isChecked)
  const handleChangeInputChild = (ev) => {
    props.handleChangeInput({
      value: ev.target.value,
    });
  };

  const handleCheckChild = (ev) => {
    props.handleCheck({
      isChecked: ev.target.checked,
    });
  };

  return (
    <form className="form">
      <label htmlFor="search">Filtrar por nombre: </label>
      <input
        name="name"
        id="name"
        type="text"
        onChange={handleChangeInputChild}
        value={props.nameFilter}
      />
      <label htmlFor="check"> Está en emisión: </label>
      <input
        name="check"
        id="check"
        type="checkbox"
        onChange={handleCheckChild}
      />
    </form>
  );
};

export default Filters;
