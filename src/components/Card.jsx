import React from 'react';
import fondo1 from "../assets/fondo-montaña-desierto.avif"
import '../cards.css'
import "../escritorio.css"
import { Link } from 'react-router-dom';
import Curso1 from './Curso1';

const Card = ({card}) => {
    return (
        <div>
            <div className="">
                <div className="card-body d-grid">
                    {/* <img src={fondo1} className='logo' alt="" /> */}
                    <h4 id="name"  className='text-center Card-title'>{card.name}</h4>
                    <p className='card-text text-center text-light'>Estado: {card.estado} </p>
                    <Link to={Curso1}><a href="" className=' btn btn-outline-light text-center my-2 mx-5'>
                        Entrar al Curso
                    </a></Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
