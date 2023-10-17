import React from 'react';
import Letras from "../assets/escuela-de-ejecutivos.png"
import icono from "../assets/logo-hover.png"
import { motion, useInView } from "framer-motion

const Loading = () => {



    return (
        <div className='cargando'>
            {/* asdasdasdasdasd<h1>Hola mundo infeliz</h1> */}
            <img className='icono-loading' src={icono} alt="" />
            <img className='icono-loading-letra' src={Letras} alt="" />
            
        </div>
    );
}

export default Loading;
