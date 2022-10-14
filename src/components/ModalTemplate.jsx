import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import CloseIcon from '@mui/icons-material/Close';

const ModalTemplate = ({ onCloseIconClick, title, content }) => {
  const modalRef = useRef(null);

  const handleCloseIconClick = () => {
    if (onCloseIconClick) {
      onCloseIconClick();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseIconClick();
      }
    };

    // Bind and unbind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <Backdrop>
        <ModalContainer ref={modalRef}>
          <ModalForm>
            <FormInfo>
              <ModalSpan>{title}</ModalSpan>
              <CloseIcon onClick={() => handleCloseIconClick()} />
            </FormInfo>
            {content}
            <AddCommentButton>Agregar</AddCommentButton>
          </ModalForm>
        </ModalContainer>
      </Backdrop>
    </>
  );
};

export default ModalTemplate;

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const ModalContainer = styled.div`
  display: flex;
  width: 80%;
  background: #fff;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 16px;
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
  padding: 4px;
  margin: 0px 16px;
`;

const AddCommentButton = styled.button`
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
