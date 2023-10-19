import { useState } from "react";
import { Routes, Route,} from 'react-router-dom'
import  Login from './components/Login'
import  Loading from './components/Loading'
import Escritorio from './components/EscritorioAlumno'
import "./App.css";


function App() {

  return (
    
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/." element={<Loading/>}/>
      <Route path="/Escritorio-Alumno" element={<Escritorio/>}/>

    </Routes>
    
  );
}

export default App;
