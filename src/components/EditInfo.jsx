import React from 'react';
import styled from 'styled-components';

const AddComment = () => {
  return (
    <>
      <FormContainer>
        <FormInfo>
          Informacion del Paciente
          <ModalInput placeholder="Médico" />
        </FormInfo>
      </FormContainer>
    </>
  );
};

export default AddComment;

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
  width: 100%;
`;

const ModalComment = styled.textarea`
  resize: none;
  padding: 4px;
  margin: 0px 16px;
`;
