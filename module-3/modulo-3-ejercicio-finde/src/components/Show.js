import React from "react";
import "../stylesheets/show.scss";

const Show = (props) => {
  return (
    <article className="show">
      <img
        className="show__image"
        src={props.image}
        alt="Imagen de la serie"
      ></img>
      <div className="show__name">{props.name}</div>
      <div className="show__data">
        <div className="show__data__score">{props.score}</div>
        <div className="show__data__status">{props.status}</div>
      </div>
    </article>
  );
};

export default Show;
