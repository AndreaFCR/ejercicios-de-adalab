import React, { useState } from "react";
import List from "./List";
import clubsFromApi from "../data/clubs.json";

const App = () => {
  const [clubs, setClubs] = useState(clubsFromApi);
  return (
    <div>
      <List clubs={clubs} />
    </div>
  );
};

export default App;
