import React, { useState } from 'react';
import './style.css';

const username = 'chucknorris';
const password = '123123';

function Login() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [errMsgOpen, setErrMsgOpen] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    if (loginData.username === username && loginData.password === password) {
      sessionStorage.setItem('login', loginData);
      window.location.href = 'http://localhost:3000/home';
    } else {
      setErrMsgOpen(true);
    }
  };

  return (
    <div className="login">
      <form className="login_form">
        <div className="login_header">
          <h1>Login</h1>
        </div>
        <div className="login_body">
          <div className="username">
            <label htmlFor="username">Nombre</label>
            <input
              type="text"
              name="username"
              onChange={(e) =>
                setLoginData({ ...loginData, username: e.target.value })
              }
            />
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </div>
          <button
            name="btn_login"
            className="btn_login"
            onClick={(e) => validate(e)}
          >
            Enviar
          </button>
          {errMsgOpen && (
            <div>
              <small>Usuario o contraseña invalidas</small>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
