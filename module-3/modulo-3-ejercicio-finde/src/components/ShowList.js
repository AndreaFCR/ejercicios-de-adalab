import React from "react";
import Show from "./Show";
import "../stylesheets/showList.scss";

class ShowList extends React.Component {
  render() {
    return (
      <div className="container">
        <Show />
      </div>
    );
  }
}

export default ShowList;
