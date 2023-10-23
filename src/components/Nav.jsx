import React from 'react'
import LogoRojo from '../assets/icono-rojo.png'
import usuario from '../assets/usuario.png'
import { Link } from 'react-router-dom'
import EscritorioAlumno from './EscritorioAlumno'
import CuponDePago from './CuponDePago'
import Certificados from './Certificados'


const Nav = () => {
    return (
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 cc col-xl-2 px-sm-2 px-0 bg-d9 d-block">
                <div className="d-flex flex-column  align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
                    <Link className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                        <img src={LogoRojo} className='logo-rojo' alt="" srcset="" />
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <Link to={EscritorioAlumno}><a  className="nav-link align-middle px-0 cuadro">
                                <span className="ms-1 d-none d-sm-inline">Inicio</span>
                            </a></Link>
                        </li>
                        <li>
                            <a href="" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline">Mis cursos</span> </a>
                            <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Todos mis Cursos</span> </a>
                                </li>
                                <li>
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Terminados</span></a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link target: _blank to={CuponDePago}className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline">Cupón de pago</span></Link>
                        </li>
                        <li>
                            <Link to={Certificados}data-bs-toggle="collapse" className="nav-link px-0 align-middle "> 
                                <span className="ms-1 d-none d-sm-inline">Certificados</span></Link>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> </a>
                                </li>
                                <li>
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline">Ayuda</span></Link> 
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                                </li>
                                <li>
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                                </li>
                                <li>
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                                </li>
                                <li>
                                    <a href="" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={usuario} className='usuario ' alt="" srcset="" />

                            <span className="d-none d-sm-inline mx-1">Perfil</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">N</a></li>
                            <li><a className="dropdown-item" href="#">Configuración</a></li>
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Cerrar sección</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav