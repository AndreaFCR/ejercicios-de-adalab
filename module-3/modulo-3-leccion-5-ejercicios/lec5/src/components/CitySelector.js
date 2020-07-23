import React from "react";

const CitySelector = (props) => {
  const handleCityClick = (ev) => {
    props.handleCity(ev.currentTarget.value);
  };
  return (
    <div>
      <select onChange={handleCityClick}>
        <option value="Madrid">Madrid</option>
        <option value="Málaga">Málaga</option>
        <option value="Vigo">Vigo</option>
        <option value="Buenos Aires">Buenos Aires</option>
      </select>
    </div>
  );
};

export default CitySelector;
