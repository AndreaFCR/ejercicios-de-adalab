import React, { useEffect, useState } from "react";
import getDataFromApi from "../services/ShowService";
import Header from "./Header";
import Filters from "./Filters";
import ShowList from "./ShowList";
import "../stylesheets/app.scss";

const App = () => {
  const [showStore, setShowStore] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    getDataFromApi().then((data) => {
      setShowStore(data);
    });
  }, []);

  const handleChangeParent = (data) => {
    console.log("manejamos el input");
    console.log(data, "aquí se hacen las comprobaciones");
  };
  return (
    <div className="app">
      <Header />
      <Filters handleChangeParent={handleChangeParent} />
      <ShowList />
    </div>
  );
};

export default App;
