import React from 'react'
import { useState, useEffect } from 'react'
import LogoRojo from '../assets/icono-rojo.png'
import usuario from '../assets/usuario.png'
import { Link } from 'react-router-dom'
import "../escritorio.css"



const Nav = () => {
    const [IsAvtive, setIsAvtive] = useState(true)
    const [MisCursos, setMisCursos] = useState(false)
    const [CuponPago, setCuponPago] = useState(false)
    const [Certificado, setCertificado] = useState(false)
    const [Ayuda, setAyuda] = useState(false)

    const url = window.location;
    console.log(url.hash)

    useEffect(() => {
        if (url.hash == `#/Escritorio-Alumno`) {
            setIsAvtive(true)
            setAyuda(false)
            setCertificado(false)
            setCuponPago(false)
            setMisCursos(false)
        } else if (url.hash == `#/CuponDePago`){
            setCuponPago(true)
            setAyuda(false)
            setCertificado(false)
            setIsAvtive(false)
            setMisCursos(false)
        } else if (url.hash == `#/MisCursos`) {
            setCuponPago(false)
            setAyuda(false)
            setCertificado(false)
            setIsAvtive(false)
            setMisCursos(true)
        } else if (url.hash == `#/Certificados`) {
            setCuponPago(false)
            setAyuda(false)
            setCertificado(true)
            setIsAvtive(false)
            setMisCursos(false)
        } else if (url.hash == `#/Ayuda`) {
            setCuponPago(false)
            setAyuda(true)
            setCertificado(false)
            setIsAvtive(false)
            setMisCursos(false)
        }


        return () => {

        }
    },)



    return (
        <div className="row flex-nowrap ">
            <div className="col-auto col-md-2 cc col-xl-2 px-sm-2 px-0 bg-d9 ">
                <div className="d-flex flex-column  align-items-center align-items-sm-start px-3 pt-2  min-vh-100">
                    <Link className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                        <img src={LogoRojo} className='logo-rojo' alt="" srcset="" />
                    </Link>
                    <ul id='btnmenu' className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" >
                        <li id='btnmenu' className={IsAvtive ? "show" : ""}>
                            <Link to={"/Escritorio-Alumno"} className='nav-link bg-transparent px-0 align-middle'><a >
                                <span className="ms-1 d-none text-decoration-none d-sm-inline">Inicio</span>
                            </a></Link>
                        </li>
                        <li id='btnmenu' className={MisCursos ? "show" : ""}>
                            <Link to={"/MisCursos"} className='nav-link bg-transparent px-0 align-middle'>
                                <a className="pos px-0 ">
                                    <span className="ms-1">Mis cursos</span> </a>
                            </Link>
                        </li>
                        <li id='btnmenu' className={CuponPago ? "show" : ""}>
                            <Link to={"/CuponDePago"} className="nav-link bg-transparent px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline">Cupón de pago</span></Link>
                        </li>
                        <li className={Certificado ? "show" : ""} >
                            <Link to={"/Certificados"} className="nav-link bg-transparent px-0 align-middle ">
                                <span className="ms-1 d-none d-sm-inline">Certificados</span></Link>
                        </li>
                        <li className={Ayuda ? "show" : ""}>
                            <Link to={"/Ayuda"}  className="nav-link bg-transparent px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline">Ayuda</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <div className=" pb-4">
                        <a href="" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={usuario} className='usuario ' alt="" srcset="" />

                            <span className="d-none d-sm-inline mx-1">Perfil</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                            <li><a className="dropdown-item" href="#">Configuración</a></li>
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Cerrar sesión</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav