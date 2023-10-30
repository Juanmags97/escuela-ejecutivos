import React from 'react';
import Nav from './Nav'
import NavCel from './NavCel'
const Curso1 = () => {
    return (
        <div className="container-fluid overflow-hidden">
            <Nav></Nav>
            <NavCel></NavCel>
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='text-danger'>Curso 1</h1>

                </div>
                <div className="col-6 d-grid  justify-content-center">
                    <div class="btn-group dropend mt-4">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Modulo 1
                        </button>
                        <ul class="dropdown-menu">
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                        </ul>
                    </div>
                    <div class="btn-group dropend mt-4">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Modulo 2
                        </button>
                        <ul class="dropdown-menu">
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                        </ul>
                    </div>
                    <div class="btn-group dropend mt-4">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Modulo 3
                        </button>
                        <ul class="dropdown-menu">
                            <li>Hola</li>
                            <li>Hola</li>
                            <li>Hola</li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </div>
    );
}

export default Curso1;
