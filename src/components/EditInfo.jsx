import React from 'react';
import styled from 'styled-components';

const EditInfo = ({ paciente }) => {
  return (
    <>
      <FormContainer>
        <PersonalInfoBody>
          <PersonalInfoGroup>
            <PersonalInfoType>Nombre</PersonalInfoType>
            <ModalInput placeholder={paciente.nombre} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Apellido</PersonalInfoType>
            <ModalInput placeholder={paciente.Apellido} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Dni</PersonalInfoType>
            <ModalInput placeholder={paciente.dni} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Teléfono</PersonalInfoType>
            <ModalInput placeholder={paciente.telefono} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Dirección</PersonalInfoType>
            <ModalInput placeholder={paciente.dirección} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Mutual</PersonalInfoType>
            <ModalInput placeholder={paciente.mutual} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>N°</PersonalInfoType>
            <ModalInput placeholder={paciente.num_socio} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Grupo Sanguíneo</PersonalInfoType>
            <ModalInput placeholder={paciente.grup_sang} />
          </PersonalInfoGroup>
          <PersonalInfoGroup>
            <PersonalInfoType>Factor Sanguíneo</PersonalInfoType>
            <ModalInput placeholder={paciente.fact_sang} />
          </PersonalInfoGroup>
          <EditButton>Editar</EditButton>
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
