import React from 'react';
import Letras from "../assets/escuela-de-ejecutivos.png"
import icono from "../assets/logo-hover.png";
const Loading = () => {
    return (
        <div>
            <img src={icono} alt="" />
            <img src={Letras} alt="" />
        </div>
    );
}

export default Loading;
