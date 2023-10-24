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
                    <h4 className='Card-title'>Nombre del Curso</h4>
                    <p className='card-text text-center text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero quam magnam! Voluptatum, magni unde cupiditate quaerat sunt perspiciatis temporibus repellendus aspernatur tenetur deleniti sint veniam mollitia labore nobis in facilis ipsam assumenda, expedita architecto illum nam. Autem eius explicabo doloribus nemo aperiam, laboriosam, voluptates accusamus, numquam commodi itaque iure.</p>
                    <a href="#!" className='btn-btn-outline-secondary'>
                        entra al curso papu
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
