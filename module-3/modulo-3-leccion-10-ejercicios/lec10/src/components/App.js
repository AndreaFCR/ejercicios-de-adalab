import React from "react";
import { fetchPeople } from "../services/PeopleService";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleStore: [],
    };

    this.fetchNewPeople = this.fetchNewPeople.bind(this);
  }

  fetchNewPeople() {
    fetchPeople().then((data) => {
      this.setState({
        peopleStore: data.results,
      });

      console.log(data);
    });
  }

  render() {
    const peopleStore = this.state;
    return <div className="App">hola mundo</div>;
  }
}

export default App;
