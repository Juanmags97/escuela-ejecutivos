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

    const url = window.location.href;
    // console.log(url)

    useEffect(() => {
        if (url == "http://localhost:5173/#/Escritorio-Alumno") {
            setIsAvtive(true)
            setAyuda(false)
            setCertificado(false)
            setCuponPago(false)
            setMisCursos(false)
        } else if (url == "http://localhost:5173/#/CuponDePago") {
            setCuponPago(true)
            setAyuda(false)
            setCertificado(false)
            setIsAvtive(false)
            setMisCursos(false)
        } else if (url == "http://localhost:5173/#/MisCursos") {
            setCuponPago(false)
            setAyuda(false)
            setCertificado(false)
            setIsAvtive(false)
            setMisCursos(true)
        } else if (url == "http://localhost:5173/#/Certificados") {
            setCuponPago(false)
            setAyuda(false)
            setCertificado(true)
            setIsAvtive(false)
            setMisCursos(false)
        } else if (url == "http://localhost:5173/#/Ayuda") {
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
                    <ul id='btnmenu' className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" >
                        <li id='btnmenu' className={IsAvtive ? "show" : ""}>
                            <Link to={"/Escritorio-Alumno"}><a onClick={() => setIsAvtive(!IsAvtive)(
                                setAyuda(false),
                                setCertificado(false),
                                setCuponPago(false),
                                setMisCursos(false),
                            )} >
                                <span className="ms-1 d-none d-sm-inline">Inicio</span>
                            </a></Link>
                        </li>
                        <li id='btnmenu' className={MisCursos ? "show" : ""}>
                            <Link to={"/MisCursos"}>
                                <a  onClick={() => setMisCursos(!MisCursos)(
                                    setAyuda(false),
                                    setCertificado(false),
                                    setCuponPago(false),
                                    setIsAvtive(false),
                                )} className="nav-link px-0 bg-transparent align-middle">
                                    <span className="ms-1 d-none d-sm-inline">Mis cursos</span> </a>
                            </Link>
                        </li>
                        <li id='btnmenu' className={CuponPago ? "show" : ""}>
                            <Link to={"/CuponDePago"} onClick={() => setCuponPago(!CuponPago)(
                                setAyuda(false),
                                setCertificado(false),
                                setIsAvtive(false),
                                setMisCursos(false),
                            )} className="nav-link bg-transparent px-0 align-middle">
                                <span className="ms-1 d-none d-sm-inline">Cupón de pago</span></Link>
                        </li>
                        <li className={Certificado ? "show" : ""} >
                            <Link to={"/Certificados"} className="nav-link bg-transparent px-0 align-middle ">
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
                        <li className={Ayuda ? "show" : ""}>
                            <Link to={"/Ayuda"}  className="nav-link px-0 bg-transparent align-middle">
                                <span className="ms-1 d-none d-sm-inline">Ayuda</span>
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
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