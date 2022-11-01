import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import useAlert from '../hooks/useAlert';
import { getUsers, enableUser } from '../services/users';

const AdminContainer = () => {
  const [users, setUsers] = useState();
  const { alertSuccess, alertError } = useAlert();

  useEffect(() => {
    getUsers().then((res) => setUsers(res.filter((user) => !user.enabled)));
  }, [users]);

  const handleEnableUser = (username) => {
    enableUser(username)
      .then((res) => alertSuccess('Usuario habilitado correctamente'))
      .catch((err) => console.error(err));
  };

  return (
    <PageContainer>
      <h1>Users disabled</h1>
      {users &&
        users.map((user, idx) => (
          <UsersContainer key={idx}>
            <span>{user.username}</span>
            <span>{user.name}</span>
            <button onClick={() => handleEnableUser(user.username)}>
              Enable User
            </button>
          </UsersContainer>
        ))}
    </PageContainer>
  );
};

export default AdminContainer;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 64px);
`;

const UsersContainer = styled.div`
  display: flex;
  padding: 8px;
`;
