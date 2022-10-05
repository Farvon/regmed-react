import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPacientes } from '../services/getPacientes';

const SearchResult = ({ dniPaciente }) => {
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    getPacientes().then((res) =>
      setPaciente(res.find((e) => e.dni == dniPaciente))
    );
  }, [dniPaciente]);

  return (
    <Contenedor>
      <InfoContainer>
        {/* Siempre validamos que exista antes de mostrarlo, sino hace boom */}
        {paciente ? (
          <>
            <InfoTitle>
              Paciente:{paciente.nombre} {paciente.dni}
            </InfoTitle>
            <InfoTable>Aca va la tabla</InfoTable>
          </>
        ) : (
          <span>Ups, parece que no hay nadie con ese DNI.</span>
        )}
      </InfoContainer>
    </Contenedor>
  );
};

export default SearchResult;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: lightgray;
`;

const InfoTitle = styled.span`
  width: 100%;
`;

const InfoTable = styled.div``;
