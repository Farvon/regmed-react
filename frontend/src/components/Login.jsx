import React, { useState } from 'react';
import styled from 'styled-components';
import { login } from '../services/login';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    login({ username, password })
      .then((response) => {
        localStorage.setItem('loggedRegMedUser', JSON.stringify(response));
        setUser(response);
      })
      .catch((err) => console.error(err));
  };

  return (
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
  );
};

export default Login;
