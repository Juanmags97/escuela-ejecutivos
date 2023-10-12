import React from 'react';
import Letras from "../assets/escuela-de-ejecutivos.png"
import icono from "../assets/logo-hover.png";
const Loading = () => {
    return (
        <div>
            <h1>Hola mundo infeliz</h1>
            <img src={icono} alt="" />
            <img src={Letras} alt="" />
        </div>
    );
}

export default Loading;
