import { useState } from "react";
import "./App.css";
import icono from "./assets/logo-hover.png"


function App() {

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
        <span className="frase"> Aprender es evolucionars</span>
      
      </div>

    </>
  );
}

export default App;
