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
    // poner en la funcion nameFilter porque así busca con lo que pongamos en value. Necesitamos un array de datos que busca cambiando la url del api (ver en ShowService). Luego establecemos el nuevo estado de showStore
    getDataFromApi(nameFilter).then((data) => {
      setShowStore(data);
    });
    // poner un array vacío para que no entre en bucle infinito. le ponemos nameFilter para que se busque cada vez que nameFilter cambie.
  }, [nameFilter]);

  // handlers de los filters: para mantener el código más limpio recomienda que se pasen por lifting lo datos lo más limpio posible, en este caso, traemos el value que viene de ev.target.value
  const handleChangeInput = (props) => {
    //obtenemos el valor del input y restablecemos el valor de nameFilter
    setNameFilter(props.value);
  };

  const handleCheck = (props) => {
    // obtenemos el valor del check, en este caso true or false y restablecemos el valor del statusFilter
    setStatusFilter(props.isChecked);
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
