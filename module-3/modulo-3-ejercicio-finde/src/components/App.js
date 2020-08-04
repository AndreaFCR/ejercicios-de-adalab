import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/ShowService";
import Header from "./Header";
import Filters from "./Filters";
import ShowList from "./ShowList";
import "../stylesheets/app.scss";

const App = () => {
  const [showStore, setShowStore] = useState([]);
  const [nameFilter, setNameFilter] = useState("girls");
  const [statusFilter, setStatusFilter] = useState(false);

  useEffect(() => {
    getDataFromApi().then((data) => {
      setShowStore(data);
    });
  }, [nameFilter]);

  // handlers de los filters
  const handleChangeInput = (ev) => {
    console.log("aquí se hacen las comprobaciones del input", ev.target.id);
    setNameFilter(ev.target.value);
  };

  const handleCheck = (ev) => {
    console.log("aquí se hacen las comprobaciones del check", ev.target.id);
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
