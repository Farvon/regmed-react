import React from 'react';
import styled from 'styled-components';

const InfoPaciente = () => {
  return (
    <Contenedor>
      <InfoContainer>La wea del paciente</InfoContainer>
    </Contenedor>
  );
};

export default InfoPaciente;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: #d7ded3;
`;
