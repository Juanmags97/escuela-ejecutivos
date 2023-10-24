import { useState } from "react";
import { Routes, Route, } from 'react-router-dom';
import Login from './components/Login';
import Loading from './components/Loading';
import Escritorio from './components/EscritorioAlumno';
import Certificados from "./components/Certificados";
import CuponDePago from "./components/CuponDePago";
import MisCursos from"./components/MisCursos";
import Ayuda from "./components/Ayuda";
import "./App.css";


function App() {

  return (

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/." element={<Loading />} />
      <Route path="/Escritorio-Alumno" element={<Escritorio />} />
      <Route path="/Certificados" element={<Certificados />} />
      <Route path="/CuponDePago" element={<CuponDePago/>}/>
      <Route path="/MisCursos" element={<MisCursos/>}/>
      <Route path="/Ayuda" element={<Ayuda/>}/>




    </Routes>

  );
}

export default App;
