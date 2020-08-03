import React from "react";
import "../stylesheets/filters.scss";

const Filters = (props) => {
  const handleChangeChild = (ev) => {
    props.handleChangeParent({
      value: ev.target.value,
      // key: "name"
    });
  };
  return (
    <form className="form">
      <label htmlFor="search">Filtrar por nombre: </label>
      <input name="name" type="text" onChange={handleChangeChild} />
      <label htmlFor="check"> Está en emisión: </label>
      <input name="check" type="checkbox" />
    </form>
  );
};

export default Filters;
