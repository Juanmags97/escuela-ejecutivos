import { React, useEffect, useRef } from 'react';
import Letras from "../assets/escuela-de-ejecutivos.png"
import icono from "../assets/logo-hover.png"
import { useInView } from "framer-motion"

const Loading = () => {
   function IzDer({ children }) {
      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      return (
         <section ref={ref}>
            <span
               style={{
                  transform: isInView ? "none" : "translate(-100px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all linear 0.5s",
                  display:"block",
               }}
            >
               {children}
            </span>
         </section>
      );
   }

   useEffect(() => {
      setTimeout(() => {
         window.location.replace('#/Escritorio-Alumno');
      }, 2000);


      return
   },)




   return (
      <div className='cargando'>
         {/* asdasdasdasdasd<h1>Hola mundo infeliz</h1> */}

         <img className='icono-loading' src={icono} alt="" />

         <IzDer><img className='icono-loading-letra' src={Letras} alt="" /></IzDer>

      </div>
   );
}

export default Loading;
