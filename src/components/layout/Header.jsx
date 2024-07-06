import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../../styles/Header.css'

function Header() {
    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    useEffect(() => { // Verificar si hay un usuario en localStorage
        if (!user) {
            navigate('/')
        }
    })

    const logoutUser = () => { // Cerrar Sesion, eliminando usuario de localStorage
        localStorage.removeItem('user');
        navigate('/')
    }


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid px-5 text-light">

                        <span className='fs-5'>TIENDA</span>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className='fs-6'>{user.toUpperCase()}</span>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" href="" onClick={logoutUser}>Cerrar Sesión</a></li>
                                    </ul>
                                </li>

                                {/* <li className="nav-item">
                                    <Link to="/Store" className='text-decoration-none text-light'>Inicio</Link>
                                </li> */}

                                {/* <li className="nav-item">
                                    <Link to="/Store/Register">Registrar</Link>
                                </li> */}

                                {/* <li className="nav-item">
                                    <a href="" onClick={cerrarSesion} className='text-decoration-none text-light'>Cerrar Sesión</a>
                                </li>

                                <li className='nav-item'>
                                    <span>{user.toUpperCase()}</span>
                                </li> */}
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header