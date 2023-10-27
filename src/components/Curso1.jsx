import React from 'react';
import Pdf from "./Pdf"
const Curso1 = () => {
    return (
        <div className="container-fluid overflow-hidden">
            <h1>Curso 1</h1>
            <div className="modulo1">
                <h2>modulo 1</h2>

            <Pdf/>
            </div>
            <div className="modulo2">
                <h2>Modulo 2</h2>
                <Pdf/>
            </div>
            <div className="modulo3">
                <h2>Modulo 3</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/njJTZPbHbt4?si=p1J9wyk4SSW2dKz7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Curso1;
