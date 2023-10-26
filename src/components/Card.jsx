import React from 'react';
import fondo1 from "../assets/fondo-montaña-desierto.avif"
import '../cards.css'
import "../escritorio.css"

const Card = () => {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <img src={fondo1} className='logo' alt="" />
                    <h4 id="name"  className='Card-title'>curso</h4>
                    <p className='card-text text-center text-secondary'> </p>
                    <a href="#!" className='btn-btn-outline-secondary btn btn-danger text-center'>
                        Entrar al Curso
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
