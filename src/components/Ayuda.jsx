import React from 'react'
import NavCel from './NavCel'
import Nav from './Nav'
import '../escritorio.css'


const Ayuda = () => {
  return (
    <div className="container-fluid overflow-hidden">
      <Nav></Nav>
      <NavCel className="visual"/>

    </div>
  )
}

export default Ayuda