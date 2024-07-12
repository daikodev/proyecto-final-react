import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'

function Header() {
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)
    const user = localStorage.getItem("user");

    useEffect(() => { // Verificar si hay un usuario en localStorage
        if (!user) {
            navigate("/")
        }
    })

    const logoutUser = () => { // Cerrar Sesion, eliminando usuario de localStorage
        localStorage.removeItem("user");
        navigate("/")
    }


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid px-5 text-light">

                        <span className="fs-5">SISTEMA</span>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">

                                <li className="nav-item">
                                    <Link to="/Store" className={`nav-link ${location.pathname === "/Store" ? "active" : ""}`}>Tienda</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/Store/Products" className={`nav-link ${location.pathname === "/Store/Products" ? "active" : ""}`}>Productos</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="fs-6">{user.toUpperCase()}</span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                                        <li>
                                            <button className="dropdown-item" onClick={logoutUser}>Cerrar Sesión</button>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header