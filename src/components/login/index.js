import React from 'react';
import './style.css';

function Login() {
  return (
    <div className="login">
      <form className="login_form">
        <div className="login_header">
          <h1>Login</h1>
        </div>
        <div className="login_body">
          <input type="text" name="username" />
          <input type="text" name="password" />
          <inpu type="submit" name="btn_login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
