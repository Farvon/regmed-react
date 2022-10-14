import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ButtonLink from './ButtonLink';

import { getLocalStorageData } from '../services/localStorageUtils';
// import { getPacientes } from '../services/getPacientes';

const SearchResult = ({ dniPaciente }) => {
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    const database = getLocalStorageData();
    const searchPacient = database.find((e) => e.dni == dniPaciente);
    setPaciente(searchPacient);

    // Ej. consumiendo database desde servicio
    /*     getPacientes().then((res) =>
     setPaciente(res.find((e) => e.dni == dniPaciente))
    ); */
  }, [dniPaciente]);

  return (
    <Contenedor>
      <InfoContainer>
        {/* Siempre validamos que exista antes de mostrarlo, sino hace boom */}
        {paciente ? (
          <>
            <InfoTitle>Resultado de la búsqueda</InfoTitle>

            <ResultadoContainer>
              <TableContainer>
                <TableHead>
                  <tr>
                    <Th>Nombre</Th>
                    <Th>Apellido</Th>
                    <Th>D.N.I.</Th>
                    <Th>Historia Clínica</Th>
                  </tr>
                </TableHead>
                <TableBody>
                  <tr>
                    <Td>{paciente.nombre}</Td>
                    <Td>{paciente.apellido}</Td>
                    <Td>{paciente.dni}</Td>
                    <Td>
                      <Link to="/info">
                        <ButtonLink size="16px">Info</ButtonLink>
                      </Link>
                    </Td>
                  </tr>
                </TableBody>
              </TableContainer>
            </ResultadoContainer>
          </>
        ) : (
          <InfoTitle>Ups, parece que no hay nadie con ese DNI.</InfoTitle>
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
  background: #f4f6f5;
`;

const InfoTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin: 16px 0px 0px 0px;
`;

const ResultadoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100px;
`;

const TableContainer = styled.table`
  display: flex;
  height: 80px;
  margin: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-collapse: collapse;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const TableHead = styled.thead`
  display: flex;
  margin: 0;
  padding: 0;
`;

const TableBody = styled.tbody`
  display: flex;
  margin: 0;
  padding: 0;
`;

const Th = styled.th`
  width: 200px;
  padding: 8px;
  background-color: white;
  font-weight: bold;
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;

  :last-child {
    border-right: none;
  }
`;

const Td = styled.td`
  width: 200px;
  padding: 8px;
  background-color: white;
  text-align: center;
  border-right: 1px solid lightgray;

  :last-child {
    border-right: none;
  }
`;
