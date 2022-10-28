import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import useAlert from '../hooks/useAlert';
import { login } from '../services/login';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { alertError } = useAlert();

  const handleLogin = (event) => {
    event.preventDefault();
    const credentials = { username, password };
    login(credentials)
      .then((response) => {
        localStorage.setItem('loggedRegMedUser', JSON.stringify(response));
        setUser(response);
      })
      .catch((err) => {
        console.error(err);
        alertError('Ha ocurrido un error. Intente nuevamente');
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="text"
          value={username}
          name="Username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={password}
          name="Password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
      <div>
        <span>Todavia no estas registrado?</span>
        <Link to="add-user">Click aca</Link>
      </div>
    </div>
  );
};

export default Login;
