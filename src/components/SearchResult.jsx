import React from 'react';
import styled from 'styled-components';

const SearchResult = ({ dniPaciente }) => {
  return (
    <Contenedor>
      <InfoContainer>DNI: {dniPaciente}</InfoContainer>
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
