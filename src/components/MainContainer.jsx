import React from 'react';
import styled from 'styled-components';
import ResponsiveAppBar from './Header'

const MainContainer = () => {
  return (
    <AppContainer>
      <Contenedor>
      <ResponsiveAppBar/>
      </Contenedor>
    </AppContainer>
  );
};

export default MainContainer;

const AppContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100vw;
    height:100vh;
    background-color:#DAFAEE;
`;

const Contenedor = styled.div`
  display:flex;
  width: 80vw;
  height: 80vh;
  border-radius: 20px 20px;
  box-shadow:0px 0px 3px black;
`;
