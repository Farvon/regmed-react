import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';

import styled from 'styled-components';
import InfoPaciente from './InfoPaciente';
import SearchResult from './SearchResult';

const MainContainer = () => {
  const [dni, setDni] = useState();

  return (
    <BrowserRouter>
      <SideContainer>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#010F25',
          }}
        >
          <InputBuscador onChange={(e) => setDni(e.target.value)} />
          <StyledLink to="search">
            <StyledButton
              variant="outlined"
              sx={{ background: 'white', display: 'flex', margin: 'auto' }}
            >
              Buscar
            </StyledButton>
          </StyledLink>
        </Box>
      </SideContainer>

      <Contenedor>
        <InfoContainer></InfoContainer>
      </Contenedor>

      <Routes>
        <Route path="home" element={'/'}></Route>
        <Route
          path="search"
          element={<SearchResult dniPaciente={dni} />}
        ></Route>
        <Route path="info" element={<InfoPaciente />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainContainer;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: #d7ded3;
`;

const InputBuscador = styled.input`
  display: flex;
  margin: 10% auto 5% auto;
  width: 80%;
  height: 2vw;
  border-radius: 5px 5px;
  font-size: 1.5vw;
`;

const SideContainer = styled.div`
  display: flex;
  width: 20%;
  height: 93vh;
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
  width: 100%;
  height: 40px;
  margin: 5px 16px;
  border-radius: 10px 10px;

  :hover {
    color: black;
    background-color: white;
    opacity: 1;
  }
`;
