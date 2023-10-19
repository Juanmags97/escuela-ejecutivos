import React from "react";
import icono from "../assets/logo-hover.png";
import {Link} from "react-router-dom";
import "../lobby.css";




export const Login = () => {
    return (
        <div className="login">
            <div className="logos">
                <img className="icono" src={icono} />
            </div>

            <form className="formulario" action="" method="get">
                <input type="text" placeholder="Correo" />
                <input type="password" placeholder="Contraseña" />
                <Link className="btnLogin" to="/.">Ingresar</Link>
            </form>

            <div>
                <span className="frase"> Aprender es evolucionar</span>
            </div>
        </div>
    );
};

export default Login;

