import React from 'react';
import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';

const AddCommentModal = ({ onCloseIconClick }) => {
  const handleCloseIconClick = () => {
    if (onCloseIconClick) {
      onCloseIconClick();
    }
  };

  return (
    <>
      <Backdrop>
        <ModalContainer>
          <ModalForm>
            <FormInfo>
              <ModalSpan>Agregar Comentario</ModalSpan>
              <CloseIcon onClick={() => handleCloseIconClick()} />
            </FormInfo>

            <FormContainer>
              <FormInfo>
                <ModalInput placeholder="Médico" />
              </FormInfo>
              <FormInfo>
                <select>
                  <option value="" defaultValue="" required>
                    - Rama Médica -
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
            <AddCommentButton>Agregar</AddCommentButton>
          </ModalForm>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default AddCommentModal;

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalContainer = styled.div`
  display: flex;
  width: 80%;
  background: #fff;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto;
`;

const ModalSpan = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`;

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
`;

const AddCommentButton = styled.button`
  display: flex;
  margin: auto;
  margin-top: 16px;
  width: 240px;
  text-align: center;
  justify-content: center;
  color: #090909;
  padding: 0.7em 1.7em;
  font-size: 18px;
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  transition: all 0.3s;
  box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;

  :hover {
    border: 1px solid white;
  }

  :active {
    box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
  }
`;
