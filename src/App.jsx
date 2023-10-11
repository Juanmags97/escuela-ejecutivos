import { useState } from "react";
import "./App.css";
import logo from "./assets/logo-01.png";
import icono from "./assets/logo-hover.png"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1> Aprender es evolucionar</h1>
        </div>
        <div className="logos">
          <img className="logo" src={logo} />
          <img  className="icono" src={icono}  />
        </div>
      
    </>
  );
}

export default App;
