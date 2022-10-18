import React, { useState } from 'react';
import styled from 'styled-components';
import {
  setLocalStorageData,
  getLocalStorageData,
} from '../services/localStorageUtils';

const AddPaciente = () => {
  const database = getLocalStorageData();
  const newId = database.length;
  const [newPaciente, setNewPaciente] = useState({
    id: '',
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    direccion: '',
    mutual: '',
    num_socio: '',
    grup_sang: '',
    fact_sang: '',
    historial: [],
  });

  const AddNewPaciente = ({ newPaciente }) => {
    const info = {
      id: newId + 1,
      nombre: newPaciente.nombre,
      apellido: newPaciente.apellido,
      dni: newPaciente.dni,
      telefono: newPaciente.telefono,
      direccion: newPaciente.direccion,
      mutual: newPaciente.mutual,
      num_socio: newPaciente.num_socio,
      grup_sang: newPaciente.grup_sang,
      fact_sang: newPaciente.fact_sang,
      historial: [],
    };

    database.push(info);
    setLocalStorageData(database);
  };

  return (
    <>
      <FormContainer>
        <PersonalInfoBody>
          <PersonalInfoGroup>
            <PersonalInfoType>Nombre</PersonalInfoType>
            <ModalInput
              value={newPaciente.nombre}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  nombre: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Apellido</PersonalInfoType>
            <ModalInput
              value={newPaciente.apellido}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  apellido: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Dni</PersonalInfoType>
            <ModalInput
              value={newPaciente.dni}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  dni: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Teléfono</PersonalInfoType>
            <ModalInput
              value={newPaciente.telefono}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  telefono: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Dirección</PersonalInfoType>
            <ModalInput
              value={newPaciente.direccion}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  direccion: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Mutual</PersonalInfoType>
            <ModalInput
              value={newPaciente.mutual}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  mutual: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>N°</PersonalInfoType>
            <ModalInput
              value={newPaciente.num_socio}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  num_socio: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Grupo Sanguíneo</PersonalInfoType>
            <ModalInput
              value={newPaciente.grup_sang}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  grup_sang: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Factor Sanguíneo</PersonalInfoType>
            <ModalInput
              value={newPaciente.fact_sang}
              onChange={(e) =>
                setNewPaciente((prevState) => ({
                  ...prevState,
                  fact_sang: e.target.value,
                }))
              }
            />
          </PersonalInfoGroup>
          <AddButton onClick={() => AddNewPaciente({ newPaciente })}>
            Agregar Paciente
          </AddButton>
        </PersonalInfoBody>
      </FormContainer>
    </>
  );
};

export default AddPaciente;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const FormInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalInput = styled.input`
  font-size: 16px;
  padding: 8px;
  margin: 8px;
  border: 2px solid lightgray;
  border-radius: 10px;
`;

const PersonalInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 8px;
`;

const PersonalInfoGroup = styled.form`
  display: flex;
`;

const RadiusInfoGroup = styled.div`
  display: flex;
  margin: auto;
`;

const PersonalInfoType = styled.label`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 40%;
  font-size: 16px;

  color: gray;
`;

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  margin: 16px auto 0;
  color: white;
  padding: 12px 24px 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  background: #3498db;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  border: none;
  transition: all 0.3s ease;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  :hover {
    background: #3cb0fd;
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  }

  :active {
    background: #3498db;
    background-image: linear-gradient(to bottom, #3498db, #2980b9);
  }
`;
