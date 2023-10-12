import React from "react";
import icono from "../assets/logo-hover.png";



export const Login = () => {
    return (
    <div>
        <div className="logos">
            <img className="icono" src={icono} />
        </div>

        <form className="formulario" action="" method="get">
            <input type="text" placeholder="Correo" />
            <input type="password" placeholder="Contraseña" />

        <button type="button" className="btnLogin">
            Ingresar
        </button>
        </form>

        <div>
            <span className="frase"> Aprender es evolucionar</span>
        </div>
    </div>
    );
};

export default Login;

