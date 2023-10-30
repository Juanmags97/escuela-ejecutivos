import React from 'react';
import "../escritorio.css"
import Nav from './Nav'
import NavCel from './NavCel';
import Cards from './Card'




const EscritorioAlumno = () => {

  return (
    <div className="container-fluid overflow-hyg">

      <Nav />
      <NavCel/>
      {/* ----------------------- fin nav----------------------------- */}
      <div className="row">
        <div className="col-12 justify-content-end m-4 d-flex">
          <h3 className='me-5'>¡Bienvenido! <span className=' text-danger'>Nombre Usuario</span></h3>
        </div>
        <div className="col-6 ">
          <h3 className='ms-4 text-center'>Mis Cursos</h3>
        </div>
        <div className="col-12 col-lg-7">
          <ul className='d-flex ms-lg-4 ms-0   justify-content-center '>
            <li className='select unselect '>Todos mis cursos</li>
            <li className='unselect'>En curso </li>
            <li className='unselect'>Terminados</li>
          </ul>
        </div>
      </div>
      {/* ------------------------prueba carrousel con card-------------- */}
      <div className="row d-flex justify-content-center">
        <div className="col-lg-2"></div>
          <div className="col-12 col-md-3 mt-5 mt-lg-0">
            <Cards className="mt-5" card={{name:"curso 1", estado:"en curso ",link:"/Curso1"}}>
            </Cards>
          
          </div>
          <div className="col-12 col-md-3 mt-5 mt-lg-0">
            <Cards className="mt-5" card={{name:"curso 2", estado:"en curso"}}>
            </Cards>
          
          </div>
          <div className="col-12 col-md-3 mt-5 mt-lg-0">
            <Cards className="mt-5" card={{name:"curso 3", estado:"terminado"}}></Cards>
          
          </div>
          
      </div>

      <div className="row">
        <div className="col-8 mt-5 ms-5">
          <h3 className='text-center'>Estos Cursos prodrian interesarte </h3>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-lg-2"></div>
          <div className="col-12 col-md-3 mt-5 mt-lg-0">
            <Cards className="mt-5" card={{name:"curso 1", estado:"en curso",link:"/Curso1"}}>
            </Cards>
          
          </div>
          <div className="col-12 col-md-3 mt-5 mt-lg-0">
            <Cards className="mt-5" card={{name:"curso 2", estado:"en curso"}}>
            </Cards>
          
          </div>
          <div className="col-12 col-md-3 mt-5 mt-lg-0">
            <Cards className="mt-5" card={{name:"curso 3", estado:"terminado"}}></Cards>
          
          </div>
          
      </div>
    
      {/* <Cards /> */}
      {/* fin   */}
    </div>
  );
}

export default EscritorioAlumno;

