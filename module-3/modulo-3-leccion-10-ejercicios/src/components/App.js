import React from "react";
import getDataFromApi from "../services/PeopleService";
import FilterCity from "./FilterCity";
import FilterGender from "./FilterGender";
import PeopleList from "./PeopleList";

import "../stylesheets/Add.css";

const App = () => {
  return (
    <div className="App">
      <div className="filter-container">
        <FilterCity />
        <FilterGender />
      </div>
      <PeopleList />
    </div>
  );
};

export default App;
