// rfce
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import pikachu from '../assets/pikachu.jpeg';

function Login() {

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => { // Redirigir a Home si existe un usuario en localStorage
        const saveUser = localStorage.getItem('user');

        if (saveUser) {
            navigate('/Store')
        }

    }, [Navigate]);

    const iniciarSesion = (e) => {
        e.preventDefault();

        let txtUsuario = document.getElementById("txtUsuario").value;
        let txtPassword = document.getElementById("txtPassword").value;

        if (txtUsuario.length === 0 || txtPassword.length === 0) {

            setError(true);
            setLoginFailed(false);

        } else {
            if (user === "admin" && password === "123") {
                // Guardar usuario dentro de un array dentro del localstorage

                localStorage.setItem('user', user); // Guardar usuario en localStorage
                setLogin(true);
                navigate('/Store');

            } else {

                setLogin(false);
                setLoginFailed(true);
                setError(false);

                document.getElementById("txtUsuario").value = "";
                document.getElementById("txtPassword").value = "";
                document.getElementById("txtUsuario").focus();

            }
        }

    }

    return (
        <>
            <section className='row g-0 vh-100'> {/* g-0: quitar margenes negativos (oculta barra de desplazamiento) */}
                {/* Quitar vh-100 si se malogra para movil */}
                <div className='col-xl-8 d-none d-sm-inline d-sm-none d-xl-block'>
                    <img src={pikachu} alt="..." className='img-fluid w-100 vh-100' />
                </div>

                <div className='col-xl-4 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <form action="" className='row w-100 justify-content-center align-items-center'>
                        <div className='col-10'>
                            <h2 className='text-center'>Bienvenido!</h2>

                            <div className='d-flex flex-column form-group my-4'>
                                <label htmlFor="txtUsuario" className='fw-bold pb-2'>Nombre de Usuario</label>
                                <input type="text" id="txtUsuario" onChange={(e) => setUser(e.target.value)} className='form-control px-3' placeholder='Ingresa tu nombre de usuario' required />
                            </div>

                            <div className='d-flex flex-column form-group my-4'>
                                <label htmlFor="txtPassword" className='fw-bold pb-2'>Contraseña</label>
                                <input type="password" id="txtPassword" onChange={(e) => setPassword(e.target.value)} className='form-control px-3' placeholder='Ingresa tu contraseña' required />
                            </div>

                            <div className='text-danger'>
                                {error && <p>Todos los campos son obligatorios. Por favor, completa toda la información.</p>}
                                {loginFailed && <p>Usuario o contraseña incorrectos. Por favor, verifica tus datos e inténtalo de nuevo.</p>}
                            </div>

                            <input type="submit" value="Iniciar Sesión" onClick={iniciarSesion} className='btn btn-dark boton w-100 mb-4' />
                        </div>
                    </form>
                </div>

            </section>
        </>
    )
}

export default Login