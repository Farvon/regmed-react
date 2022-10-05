import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPacientesByDni } from '../services/getPaciente';

const SearchResult = ({ dniPaciente }) => {
  const [paciente, setPaciente] = useState([]);
  const PacienteResult = paciente.find((e) => e.dni == dniPaciente);

  useEffect(() => {
    getPacientesByDni(dniPaciente).then((res) => setPaciente(res));
  }, [dniPaciente]);

  return (
    <Contenedor>
      <InfoContainer>
        {/*SE ROMPE PORQUE PRIMERO BUSCA UN .nombre EN UN ARRAY VACIO  :'( */}
        {/* Paciente:{PacienteResult.nombre} {PacienteResult.dni} */}
        {console.log('Paciente:', PacienteResult)}
      </InfoContainer>
    </Contenedor>
  );
};

export default SearchResult;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: #d7ded3;
`;
