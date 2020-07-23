import React from "react";
import OnionHater from "./OnionHater";
import CitySelector from "./CitySelector";

const App = () => {
  const handleCity = () => {
    console.log("soy la funcion manejadora de app");
  };

  return (
    <div className="App">
      <OnionHater />
      <CitySelector handleCity={handleCity} />
      <p>Ciudad seleccionada:</p>
    </div>
  );
};

export default App;
