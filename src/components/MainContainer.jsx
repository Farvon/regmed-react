import React from 'react';
import styled from 'styled-components';
import SideBarContainer from './SideBarComponent';

const MainContainer = () => {
  return (
    <Contenedor>
      <InfoContainer>asdgfdsgasd</InfoContainer>
    </Contenedor>
  );
};

export default MainContainer;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  background: #d7ded3;
`;
