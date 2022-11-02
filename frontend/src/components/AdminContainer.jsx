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
      <h1>Habilitar Nuevos Usuarios</h1>
      <Table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Habilitar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {users &&
              users.map((user, idx) => (
                // <UsersContainer key={idx}>
                <>
                  <td>{user.username}</td>
                  <td>{user.name}</td>
                  <td>
                    <EnableButton
                      onClick={() => handleEnableUser(user.username)}
                    >
                      Habilitar
                    </EnableButton>
                  </td>
                </>
                // </UsersContainer>
              ))}
          </tr>
        </tbody>
      </Table>
    </PageContainer>
  );
};

export default AdminContainer;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 64px);

  h1 {
    padding: 16px;
  }
`;

const UsersContainer = styled.div`
  display: flex;
  padding: 8px;

  span {
    font-size: 24px;
  }
`;

const Table = styled.table`
  justify-content: center;
  align-items: center;
  padding: 8px;
  tbody {
    text-align: center;
  }

  th {
    background-color: lightgray;
  }

  td {
    width: 33%;
    padding: 10px;
    border-left: 1px solid lightgray;
    :last-child {
      border-right: 1px solid lightgray;
    }
  }
`;

const EnableButton = styled.button`
  width: 40%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: auto;
  color: white;
  padding: 12px 24px 12px 24px;
  font-size: 0.8em;
  border-radius: 8px;
  background: #3498db;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  border: none;
  transition: all 0.3s ease;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
`;
