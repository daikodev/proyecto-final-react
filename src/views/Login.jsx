// rfce
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function Login() {

    const [login, setLogin] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loginFailed, setLoginFailed] = useState(false);
    const navigate = useNavigate();

    useEffect(() => { // Redirigir a Home si existe un usuario en localStorage
        const saveUser = localStorage.getItem('user');

        if(saveUser) {
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
            <div>
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
        </>
    )
}

export default Login