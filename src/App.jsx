import { useState } from 'react'
import './App.css'
import logo from './assets/logo-01.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1> Aprender es evolucionar</h1>
        <div className="logo"> 
        <img src={logo} />
        </div>
        
      </div>
    
    </>
  )
}

export default App
