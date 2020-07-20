import React from "react";
import image from "./me-mac.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="header-image" alt="image" />
        <div className="header-text">
          <h2>Alex Guerrero</h2>
          <p>Lunes 26 de junio de 2017</p>
        </div>
      </header>
      <main>
        <p></p>
      </main>
    </div>
  );
}

export default App;
