import React from 'react';
import "../escritorio.css"
import Nav from './Nav'
// import Curso1 from '../assets/fondo-montaña-agua.avif'
import Curso2 from '../assets/fondo-montaña-desierto.avif'


const EscritorioAlumno = () => {

  return (
    <div className="container-fluid overflow-hidden">

      <Nav />

      {/* ----------------------- fin nav----------------------------- */}
      <div className="row">
        <div className="col-12 justify-content-end m-4 d-flex">
          <h3 className='me-5'>¡Bienvenido! <span className=' text-danger'>Fulanito</span></h3>
        </div>
        <div className="col-6 ">
          <h3 className='ms-4 text-center'>Mis Cursos</h3>
        </div>
        <div className="col-7">
          <ul className='d-flex ms-4 justify-content-center '>
            <li className='select unselect'>Todos mis cursos</li>
            <li className='unselect'>En curso </li>
            <li className='unselect'>Terminados</li>
          </ul>
        </div>
      </div>
      {/* ------------------------prueba carrousel con card-------------- */}
      {/* <div className="row d-flex justify-content-end">
        <div className="col-10 ">
          <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-group">
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="carousel-item">
                <div class="card-group">
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="carousel-item">
                <div class="card-group">

                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card ms-2 text-bg-dark">
                    <img src={Curso2} class="card-img" alt="..." />
                    <div class="card-img-overlay">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small>Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      
      <Cards/>
      {/* fin   */}
    </div>
  );
}

export default EscritorioAlumno;

