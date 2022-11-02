import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

const SideBar = ({ setDni, user }) => {
  const [userInput, setUserInput] = useState('');

  const handleClick = () => {
    setDni(userInput);
    setUserInput('');
  };

  return (
    <SideContainer id="side-container">
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#010F25',
        }}
      >
        <InputBuscador
          placeholder="Ingrese DNI"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <StyledLink to="/search">
          <StyledButton onClick={() => handleClick()}>Buscar</StyledButton>
        </StyledLink>
        {user && user.username !== 'guest' && (
          <StyledLink to="/add-pacient">
            <StyledButton onClick={() => handleClick()}>
              Agregar Paciente
            </StyledButton>
          </StyledLink>
        )}
      </Box>
    </SideContainer>
  );
};

export default SideBar;

const SideContainer = styled.div`
  display: flex;
  width: 300px;
  height: calc(100vh - 64px);
`;

const InputBuscador = styled.input`
  display: flex;
  margin: 10% auto 5% auto;
  padding: 0px 12px;
  width: 80%;
  height: 40px;
  border-radius: 5px 5px;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
`;

const StyledButton = styled.button`
  cursor: pointer;
  color: #010f25;
  font-weight: bold;
  background-color: white;
  width: 80%;
  height: 40px;
  margin: 0 auto 5% auto;
  padding: 0;
  border-radius: 10px 10px;

  :hover {
    color: black;
    background-color: #3dadc5;
  }
`;
