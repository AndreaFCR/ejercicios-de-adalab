import React from "react";
import data from "../data/data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="App">
        <div>
          <h3>Name</h3>
          <div>
            <i className="fas fa-chevron-down"></i>
          </div>
          <p>From</p>
        </div>
      </div>
    );
  }
}

export default App;
