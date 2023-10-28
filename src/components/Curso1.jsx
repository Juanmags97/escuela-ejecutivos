import React from 'react';
import Pdf from "./Pdf"
import Nav from './Nav'
import NavCel from './NavCel'
const Curso1 = () => {
    return (
        <div className="container-fluid overflow-hidden">
            <Nav></Nav>
            <NavCel></NavCel>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Curso 1</h1>

                </div>
                <div className="col-10 d-grid  justify-content-center">

                    <div className="modulo1">
                        <h2>modulo 1</h2>

                    </div>
                    <div className="modulo2">
                        <h2>Modulo 2</h2>
                    </div>
                    <div className="modulo3">
                        <h2>Modulo 3</h2>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/njJTZPbHbt4?si=p1J9wyk4SSW2dKz7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Curso1;
