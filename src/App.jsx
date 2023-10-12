import { useState } from "react";
import { Routes, Route,} from 'react-router-dom'
import Login from './components/Login'
import Loading from './components/Loading'
import "./App.css";


function App() {

  return (
    <div>
  
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/." element={<Loading />} />
      </Routes>

    

    </div>
  );
}

export default App;
