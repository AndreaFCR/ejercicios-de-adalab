import React from "react";

const Item = (props) => {
  // members es un array, por lo que hay que recorrerlo
  const membersLi = props.members.map((member, index) => {
    return <li key={index}>{member}</li>;
  });
  // esta parte es para pintar con las props que tengamos o en caso de que sea null
  return (
    <article>
      <h2>{props.name}</h2>
      <span>{props.icon === null ? "icono por defecto" : props.icon}</span>
      <h3>Members:</h3>
      <ul>{membersLi}</ul>
    </article>
  );
};

// en caso de que no exista esa prop
Item.defaultProps = {
  icon: "icono por defecto",
};

export default Item;
