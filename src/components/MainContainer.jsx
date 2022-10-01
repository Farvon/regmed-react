import React from 'react';
import styled from 'styled-components';
import HeaderComponent from './HeaderComponent';
import SideBarContainer from './SideBarComponent';

const MainContainer = () => {
  return (
    <AppContainer>
      <Contenedor>
        <HeaderContainer>
          <HeaderComponent />
        </HeaderContainer>
        <BodyContainer>
          <SideContainer>
            <SideBarContainer />
          </SideContainer>
          <InfoContainer></InfoContainer>
        </BodyContainer>
      </Contenedor>
    </AppContainer>
  );
};

export default MainContainer;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #dafaee;
`;

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 80vw;
  height: 80vh;
  border-radius: 20px 20px;
  box-shadow: 0px 0px 3px black;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 9%;
  z-index: 20;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const SideContainer = styled.div`
  display: flex;
  width: 20%;
  height: 100%;
  box-shadow: -2px 0px 15px black;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  background: #d7ded3;
`;
