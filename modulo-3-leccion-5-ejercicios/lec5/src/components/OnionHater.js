import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(ev) {
    if (ev.target.value.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  }

  render() {
    return <textarea onChange={this.handleAlert}></textarea>;
  }
}

export default OnionHater;
