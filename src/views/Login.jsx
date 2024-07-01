// rfce
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
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
            navigate('/Home')
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

                localStorage.setItem('user', user); // Guardar usuario en localStorage
                setLogin(true);
                navigate('/Home');

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
                <div className='col-8 d-none d-sm-inline'>
                    <img src={pikachu} alt="..." className='img-fluid w-100 vh-100' />
                </div>

                <div className='col-12 col-xl-4 d-flex flex-column justify-content-center align-items-center'>
                    <form action="">
                        <h2>Bienvenido</h2>

                        <div className='d-flex flex-column'>
                            <label htmlFor="txtUsuario">Usuario</label>
                            <input type="text" id="txtUsuario" onChange={(e) => setUser(e.target.value)} required />
                        </div>

                        <div className='d-flex flex-column'>
                            <label htmlFor="txtPassword">Contraseña</label>
                            <input type="password" id="txtPassword" onChange={(e) => setPassword(e.target.value)} required />
                        </div>

                        <input type="submit" value="Iniciar Sesión" onClick={iniciarSesion} />

                        {error && <p>Todos los campos son obligatorios.</p>}
                        {loginFailed && <p>Credenciales incorrectas.</p>}
                    </form>
                </div>

            </section>
        </>
    )
}

export default Login