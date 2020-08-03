import React from "react";
import "../stylesheets/show.scss";

class Show extends React.Component {
  render() {
    return (
      <article className="show">
        <div>foto</div>
        <div>título</div>
        <div>puntuacion</div>
        <div>estado</div>
      </article>
    );
  }
}

export default Show;
