import React from 'react';
import "../escritorio.css"
import LogoRojo from '../assets/icono-rojo.png'
import usuario from '../assets/usuario.png'


const EscritorioAlumno = () => {
  return (
    <div className="container-flid overflow-hidden">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 cc col-xl-2 px-sm-2 px-0 bg-d9 d-block">
          <div className="d-flex flex-column  align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
              <img src={LogoRojo} className='logo-rojo' alt="" srcset="" />
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li className="nav-item">
                <a href="#" className="nav-link align-middle px-0 cuadro">
                  <span className="ms-1 d-none d-sm-inline">Home</span>
                </a>
              </li>
              <li>
                <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <span className="ms-1 d-none d-sm-inline">Dashboard</span> </a>
                <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span></a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <span className="ms-1 d-none d-sm-inline">Orders</span></a>
              </li>
              <li>
                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                  <span className="ms-1 d-none d-sm-inline">Bootstrap</span></a>
                <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                  <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                  <li className="w-100">
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="nav-link px-0 align-middle">
                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={usuario} className='usuario ' alt="" srcset="" />

                <span className="d-none d-sm-inline mx-1">Perfil</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                <li><a className="dropdown-item" href="#">New project...</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* ----------------------- fin nav----------------------------- */}
      <div className="row">
        <div className="col-12 justify-content-end m-4 d-flex">
          <h3 className='me-5'>¡Bienvenido! <span className=' text-danger'>Usuario 666</span></h3>
          {/* <img src={usuario} className='usuario ' alt="" srcset="" /> */}
        </div>
        <div className="col-7 me-5">
          <h3 className='text-center'>Mis Cursos</h3>
        </div>
        <div className="col-7">
          <ul className='d-flex ms-4 justify-content-center '>
            <li >Todos mis cursos</li>
            <li >Terminados</li>
          </ul>
        </div>
      </div>
      {/* ------------------------prueba carrousel con card-------------- */}
      <div className="row d-flex justify-content-center">
        <div className="col-8">
            {/* <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
          <div id="carouselExampleCaptions" class="carousel carousel-dark slide" data-bs-ride="false">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="card-group">
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="carousel-item">
                <div class="card-group">
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

              </div>
              <div class="carousel-item">
                <div class="card-group">
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                  <div class="card mx-3">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
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

      {/* fin   */}
    </div>
  );
}

export default EscritorioAlumno;

