import React from 'react';
import styled from 'styled-components';
import HeaderComponent from '../components/HeaderComponent';

const LayoutAuth = (props) => {
  return (
    <LayoutAuthContainer id="layout-auth">
      <HeaderComponent />
      <LayoutAuthBody id="body-auth">{props.children}</LayoutAuthBody>
    </LayoutAuthContainer>
  );
};

export default LayoutAuth;

const LayoutAuthContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const LayoutAuthBody = styled.div`
  display: flex;
`;
