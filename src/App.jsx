import { useState } from "react";
import { Routes, Route,} from 'react-router-dom'
import  Login from './components/Login'
import  Loading from './components/Loading'
import "./App.css";


function App() {

  return (
    <>
    
    
    <Routes>
      <Route path="/" element={<Loading/>}/>
      <Route path="/cargando" element={<Login/>}/>
    </Routes>
    
    </>
  );
}

export default App;
