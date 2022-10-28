import React, { useState } from 'react';
import styled from 'styled-components';

import useAlert from '../hooks/useAlert';
import { registerNewUser } from '../services/users';

const AddUser = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');

  const { alertSuccess, alertError } = useAlert();

  const handleNewUser = (event) => {
    event.preventDefault();
    const newUser = {
      username: username,
      password: password,
      name: name,
      registration_number: registrationNumber,
    };

    registerNewUser(newUser)
      .then((res) => {
        alertSuccess('Usuario creado correctamente');
        setTimeout(() => {
          window.location.href = '/';
        }, 5000);
      })
      .catch((err) => {
        console.error(err);
        alertError('Ha ocurrido un error. Intente nuevamente');
      });
  };

  return (
    <StyledForm onSubmit={(e) => handleNewUser(e)}>
      <input
        type="text"
        value={username}
        name="username"
        placeholder="Email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        value={password}
        name="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        value={name}
        name="name"
        placeholder="Nombre y apellido"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={registrationNumber}
        name="registrationNumber"
        placeholder="Nro. Matricula"
        onChange={(e) => setRegistrationNumber(e.target.value)}
      />
      <button>Crear usuario</button>
    </StyledForm>
  );
};

export default AddUser;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 4px 0px;
  }
`;
