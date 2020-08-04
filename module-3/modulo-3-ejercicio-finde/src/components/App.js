import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/ShowService";
import Header from "./Header";
import Filters from "./Filters";
import ShowList from "./ShowList";
import "../stylesheets/app.scss";

const App = () => {
  // establecemos los valores por defecto de los datos mediante hooks
  const [showStore, setShowStore] = useState([]);
  const [nameFilter, setNameFilter] = useState("girls");
  const [statusFilter, setStatusFilter] = useState(false);

  useEffect(() => {
    // poner en la funcion nameFilter porque así busca con lo que pongamos en value, si no sólo devuelve un valor. necesitamos un array de datos, no nos vale un solo valor
    getDataFromApi(nameFilter).then((data) => {
      setShowStore(data);
    });
  }, [nameFilter]);

  // handlers de los filters
  const handleChangeInput = (ev) => {
    setNameFilter(ev.target.value);
  };

  const handleCheck = (ev) => {
    setStatusFilter(ev.target.checked);
  };

  return (
    <div className="app">
      <Header />
      <Filters
        handleChangeInput={handleChangeInput}
        handleCheck={handleCheck}
        nameFilter={nameFilter}
      />
      <ShowList showStore={showStore} statusFilter={statusFilter} />
    </div>
  );
};

export default App;
