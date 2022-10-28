import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Login from './Login';
import AddUser from './AddUser';

const UserLogin = ({ setUser }) => {
  return (
    <SectionContainer>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
      </Routes>
    </SectionContainer>
  );
};

export default UserLogin;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
`;
