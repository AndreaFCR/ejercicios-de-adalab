import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      job: "",
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(ev) {
    const value = ev.currentTarget.value;
    const stateAttribute = ev.currentTarget.id;
    const newState = {};
    newState[stateAttribute] = value;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <h1>Formulario</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleInput}
            />
          </div>
          <div>
            <label htmlFor="job">Job</label>
            <input
              type="text"
              name="job"
              id="job"
              onChange={this.handleInput}
            />
          </div>
        </form>
        <article>
          <p>Email: {this.state.email}</p>
          <p>Job: {this.state.job}</p>
        </article>
      </div>
    );
  }
}

export default App;
