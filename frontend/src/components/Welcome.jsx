import React from 'react';
import styled from 'styled-components';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import Typography from '@mui/material/Typography';

const Welcome = () => {
  return (
    <Contenedor>
      <InfoContainer>
        <InfoTitle>Bienvenido</InfoTitle>
        <InfoBody>
          Utiliza el buscador para encontrar a un paciente por su DNI
        </InfoBody>
        <MonitorHeartIcon
          sx={{
            display: { xs: 'flex' },
            margin: 'auto',
            marginTop: '0px',
            fontSize: '400px',
            opacity: '0.2',
          }}
        />
        <Typography
          variant="h1"
          sx={{
            display: { xs: 'flex' },
            margin: 'auto',
            marginTop: '-300px',
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            opacity: '0.2',
          }}
        >
          RegMed
        </Typography>
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
