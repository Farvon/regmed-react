import React, { useState } from 'react';
import styled from 'styled-components';
import { setLocalStorageData } from '../services/localStorageUtils';

const EditInfo = ({ paciente }) => {
  const [newInfo, setNewInfo] = useState(paciente);
  const [pacienteEdited, setPacienteEdited] = useState({
    nombre: paciente.name,
    apellido: paciente.apellido,
    dni: paciente.dni,
    telefono: paciente.telefono,
    direcion: paciente.dirección,
    mutual: paciente.mutual,
    num_socio: paciente.num_socio,
    grup_sang: paciente.grup_sang,
    fact_sang: paciente.fact_sang,
  });

  const UpdateInfo = ({ pacienteEdited }) => {
    setNewInfo((prevState) => ({
      ...prevState,
      nombre: pacienteEdited.nombre,
      apellido: pacienteEdited.apellido,
      dni: pacienteEdited.dni,
      telefono: pacienteEdited.telefono,
      direcion: pacienteEdited.dirección,
      mutual: pacienteEdited.mutual,
      num_socio: pacienteEdited.num_socio,
      grup_sang: pacienteEdited.grup_sang,
      fact_sang: pacienteEdited.fact_sang,
    }));
    setLocalStorageData([newInfo]);
  };

  return (
    <>
      <FormContainer>
        <PersonalInfoBody>
          <PersonalInfoGroup>
            <PersonalInfoType>Nombre</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.nombre}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  nombre: e.target.value,
                }))
              }
              placeholder={paciente.nombre}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Apellido</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.apellido}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  apellido: e.target.value,
                }))
              }
              placeholder={paciente.apellido}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Dni</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.dni}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  dni: e.target.value,
                }))
              }
              placeholder={paciente.dni}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Teléfono</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.telefono}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  telefono: e.target.value,
                }))
              }
              placeholder={paciente.telefono}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Dirección</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.direccion}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  direccion: e.target.value,
                }))
              }
              placeholder={paciente.dirección}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Mutual</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.mutual}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  mutual: e.target.value,
                }))
              }
              placeholder={paciente.mutual}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>N°</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.num_socio}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  num_socio: e.target.value,
                }))
              }
              placeholder={paciente.num_socio}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Grupo Sanguíneo</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.grup_sang}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  grup_sang: e.target.value,
                }))
              }
              placeholder={paciente.grup_sang}
            />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Factor Sanguíneo</PersonalInfoType>
            <ModalInput
              value={pacienteEdited.fact_sang}
              onChange={(e) =>
                setPacienteEdited((prevState) => ({
                  ...prevState,
                  fact_sang: e.target.value,
                }))
              }
              placeholder={paciente.fact_sang}
            />
          </PersonalInfoGroup>
          <EditButton onClick={() => UpdateInfo({ pacienteEdited })}>
            Editar
          </EditButton>
        </PersonalInfoBody>
      </FormContainer>
    </>
  );
};

export default EditInfo;

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

const EditButton = styled.button`
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
