import { useState } from "react";
import "./App.css";
import logo from "./assets/logo-01.png";
import icono from "./assets/logo-hover.png"


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="logos">
      
        <img className="icono" src={icono} />
      </div>

      <form className="formulario" action="" method="get">
          <input type="text" placeholder="Correo" />
        <input type="password" placeholder="Contraseña" />

        <button type="button" className="btnLogin">Ingresar</button>

      </form>

      <div>
        <span className="frase"> Aprender es evolucionar</span>
      
      </div>

    </>
  );
}

export default App;
