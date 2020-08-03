import React, { useState } from "react";

import "./App.css";

function App() {
  const [colorText, setColorText] = useState("colorOne");
  const [isHidden, setIsHidden] = useState("hidden");

  const handleClick = () => {
    setColorText(colorText === "colorOne" ? "colorTwo" : "colorOne");
  };

  const handleClickCollapse = () => {
    setIsHidden(isHidden === "hidden" ? "active" : "hidden");
  };

  return (
    <div>
      <div className="container">
        <p>ejemplo de collapsable: </p>
        <div className="collapsible">
          <span>COLLAPSIBLE </span>
          <button onClick={handleClickCollapse}>flecha</button>
        </div>

        <div className={isHidden}>
          <p>esto el contendio del colapsable que queremos ocultar</p>
        </div>
      </div>
      <div className="container">
        <p>ejemplo para cambiar la clase hidden: </p>
        <p className={colorText}>hello world</p>
        <button onClick={handleClick}>Change color</button>
      </div>
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.handleClickCollapse = this.handleClickCollapse.bind(this);

//     this.state = {
//       isHidden: "hidden",
//     };
//   }

//   handleClickCollapse() {
//     console.log("me han clickado");
//     this.setState({ isHidden: "active" });
//   }

//   render() {
//     return (
//       <div>
//         <div className="container">
//           <p>ejemplo de collapsable: </p>

//           <div className="collapsible">
//             <span>COLLAPSIBLE </span>
//             <button onClick={this.handleClickCollapse}>flecha</button>
//           </div>
//           <div className={this.state.isHidden}>
//             <p>esto el contendio del colapsable que queremos ocultar</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
export default App;
