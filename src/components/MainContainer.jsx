import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Box from '@mui/material/Box';
import InfoPaciente from './InfoPaciente';
import SearchResult from './SearchResult';

const MainContainer = () => {
  const [userInput, setUserInput] = useState();
  const [dni, setDni] = useState();

  return (
    <PageContainer id='page-container'>
      <SideContainer id='side-container'>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            backgroundColor: '#010F25',
          }}
        >
          <InputBuscador onChange={(e) => setUserInput(e.target.value)} />
          <StyledLink to="search">
            <StyledButton
              variant="outlined"
              sx={{ background: 'white', display: 'flex', margin: 'auto' }}
              onClick={() => setDni(userInput)}
            >
              Buscar
            </StyledButton>
          </StyledLink>
        </Box>
      </SideContainer>
      
      <SectionContainer id='section-container'>
      <Routes>
        <Route path="/" element={<div>Welcome Page</div>}></Route>
        <Route
          path="/search"
          element={<SearchResult dniPaciente={dni} />}
        ></Route>
        <Route path="/info" element={<InfoPaciente />}></Route>
      </Routes>
      </SectionContainer>
    </PageContainer>
  );
};

export default MainContainer;

const PageContainer = styled.div`
  display: flex;
`;

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
  font-size: 1.5vw;
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
    background-color: #3DADC5;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
`;
