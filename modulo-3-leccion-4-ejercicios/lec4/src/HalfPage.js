import React from "react";
// import ReactDOM from "react-dom";

class Popup extends React.Component {
  render() {
    return (
      <div className={`alert alert-${this.props.styling}`} role="alert">
        <Popup styling="info">
          <h1 className="horizontal-center">Welcome</h1>
          <p>Thank you for visiting our webpage!</p>
          <p>We hope you enjoy our new shiny site!</p>
        </Popup>
      </div>
    );
  }
}

// ReactDOM.render(
//   <Popup styling="info">
//     <h1 className="horizontal-center">Welcome</h1>
//     <p>Thank you for visiting our webpage!</p>
//     <p>We hope you enjoy our new shiny site!</p>
//   </Popup>,
//   document.getElementById("root")
// );

export default Popup;
