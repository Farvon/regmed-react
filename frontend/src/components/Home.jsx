import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import HeaderHome from './HeaderHome';

const Home = () => {
  return (
    <HomeContainer>
      <HeaderHome />
      <BackgroundImg
        src="http://todosn.com/fondo.jpg"
        alt="RegMed Background"
      />
      <SiteDescriptionContainer>
        <DescriptionSubtitle>App para médicos</DescriptionSubtitle>
        <DescriptionTitle>Registro de Historias Clínicas</DescriptionTitle>
        <DescriptionText>
          Toda la información de la atención de pacientes en un solo lugar. De
          manera fácil, práctica y segura
        </DescriptionText>
      </SiteDescriptionContainer>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;

const SiteDescriptionContainer = styled.div`
  height: calc(100vh - 96px);
  width: 475px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 64px 164px;
`;

const DescriptionSubtitle = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const DescriptionTitle = styled.span`
  font-size: 40px;
  font-weight: 500;
  margin: 16px 0;
`;

const DescriptionText = styled.span`
  font-size: 16px;
  font-weight: 300;
`;
