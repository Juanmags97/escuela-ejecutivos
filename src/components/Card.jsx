import React from 'react';
import '../cards.css'
import "../escritorio.css"
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    return (
        <div>
            <div className="">
                <div className="card-body justify-content-center  d-grid">
                    <h4 id="name"  className='text-center Card-title'>{card.name}</h4>
                    <p className='card-text text-center text-light'>Estado: {card.estado} </p>
                    <Link to={card.link}><span className=' btn btn-outline-light text-center my-2 mx-5'>
                        Entrar al Curso</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
