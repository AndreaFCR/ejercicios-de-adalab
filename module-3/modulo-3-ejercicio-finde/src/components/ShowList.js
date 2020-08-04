import React from "react";
import Show from "./Show";
import "../stylesheets/showList.scss";

const ShowList = (props) => {
  // console.log(
  //   "prop array de datos",
  //   props.showStore,
  //   "y prop estado",
  //   props.statusFilter
  // );
  const renderShows = () => {
    // placeholder para pintarlo en lugar de la imagen
    const placeholder =
      "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
    return (
      // recogemos por props los shows y los mapeamos para pintarlos (es un array y por eso lo recorremos!). añadimos datos que necesitamos como props para que show los pinte.
      // tengo que poner el filtrado antes de pintar con el map para que al pintar lo haga solamente de las series que cumplan el filtro.

      props.showStore
        .filter((show) => {
          // console.log(
          //   "recorremos el array showStore y pintamos el id de cada show",
          //   show.id
          // );
          if (props.statusFilter) {
            // NOTA: hay que recordar que para que funcione filter la función debe retornar true!! (si ponemos directamente un return true; se pinta todo). El filter pasa por todo el array y continuan al siguiente paso los que den true, por ello solo dejamos que pasen los que sean running
            return show.status === "Running";
          } else {
            // dejamos que pasen todos
            return true;
          }
        })
        .map((show) => {
          // console.log("vemos lo que ha pasado", show.id);
          // pintamos solamente lo que sí ha pasado
          return (
            <Show
              key={show.id}
              id={show.id}
              image={show.image !== null ? show.image.medium : placeholder}
              name={show.name}
              score={show.score !== null ? show.score : "score"}
              status={show.status}
            />
          );
        })
    );
  };
  return <div className="container">{renderShows()}</div>;
};

export default ShowList;
