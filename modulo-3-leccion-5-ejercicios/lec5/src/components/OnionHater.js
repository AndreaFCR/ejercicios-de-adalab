import React from "react";

class OnionHater extends React.Component {
  constructor(props) {
    super(props);
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(ev) {
    if (ev.target.value === "cebolla") {
      alert("ODIO LA CEBOLLA");
      // tiene que buscar la palabra cebolla en toda la cadena con includes
    }
  }

  render() {
    return <textarea onKeyUp={this.handleAlert}></textarea>;
  }
}

export default OnionHater;
