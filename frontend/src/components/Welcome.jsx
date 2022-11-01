import React from 'react';
import styled from 'styled-components';

import { ILogo } from '../assets/icons/logo';

const Welcome = () => {
  return (
    <Contenedor>
      <InfoContainer>
        <InfoTitle>Bienvenido</InfoTitle>
        <InfoBody>
          Utiliza el buscador para encontrar a un paciente por su DNI
        </InfoBody>
        <BackgroundLogo>
          <ILogo />
          <Span>RegMed</Span>
        </BackgroundLogo>
      </InfoContainer>
    </Contenedor>
  );
};

export default Welcome;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f4f6f5;
`;

const InfoTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 16px;
`;

const InfoBody = styled.h3`
  width: 100%;
  text-align: center;
  margin-top: 32px;
  margin-bottom: 0px;
`;

const BackgroundLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.2;
`;

const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  letter-spacing: 5px;
  font-weight: 500;
  font-size: 3em;
  opacity: 0.5;
`;
