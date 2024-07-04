import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    useEffect(() => { // Verificar si hay un usuario en localStorage
        if (!user) {
            navigate('/')
        }
    })

    const cerrarSesion = () => { // Cerrar Sesion, eliminando usuario de localStorage
        localStorage.removeItem('user');
        navigate('/')
    }


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid text-light">

                        <div className='d-flex'>

                            <a className="navbar-brand" href="#">Tienda</a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/Store" className='text-decoration-none text-light'>Inicio</Link>
                                    </li>

                                    {/* <li className="nav-item">
                                    <Link to="/Home/Test">Test</Link>
                                    </li> */}

                                    <li className="nav-item">
                                        <a href="" onClick={cerrarSesion} className='text-decoration-none text-light'>Cerrar Sesión</a>
                                    </li>

                                    <li>
                                        <span>{user.toUpperCase()}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header