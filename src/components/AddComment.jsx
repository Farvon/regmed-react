import React from 'react';
import styled from 'styled-components';

const AddComment = () => {
  return (
    <>
      <FormContainer>
        <FormInfo>
          <ModalInput placeholder="Médico" />
        </FormInfo>
        <FormInfo>
          <select required>
            <option value="" defaultValue="">
              Rama Médica
            </option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Medicina General">Medicina General</option>
          </select>
        </FormInfo>
      </FormContainer>
      <ModalComment
        id="comentario"
        name="comentario"
        cols="100%"
        rows="10"
      ></ModalComment>
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
