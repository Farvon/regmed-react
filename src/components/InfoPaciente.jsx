import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddComment from './AddComment';
import { getLocalStorageData } from '../services/localStorageUtils';
import Pagination from './Pagination';
import ModalTemplate from './ModalTemplate';
import ButtonLink from './ButtonLink';

// import { getPacientes } from '../services/getPacientes';

const InfoPaciente = ({ dniPaciente }) => {
  const [paciente, setPaciente] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(3);
  const [showAddModal, setShowAddModal] = useState(false);
  const [modalContent, setModalContent] = useState();
  const [modalTitle, setModalTitle] = useState();

  useEffect(() => {
    const database = getLocalStorageData();
    const searchPacient = database.find((e) => e.dni == dniPaciente);
    setPaciente(searchPacient);

    // Ej. consumiendo database desde servicio
    /*     getPacientes().then((res) =>
     setPaciente(res.find((e) => e.dni == dniPaciente))
    ); */
  }, [dniPaciente]);

  // Get current comments
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments =
    paciente &&
    paciente.length !== 0 &&
    paciente.historial.slice(indexOfFirstComment, indexOfLastComment);

  // Callback to change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Contenedor>
      <InfoContainer>
        {/* Siempre validamos que exista antes de mostrarlo, sino hace boom */}
        {paciente && paciente.length !== 0 ? (
          <>
            <PersonalInfoContainer>
              <PersonalInfoHeader>
                <PersonalInfoTitle>Información Personal</PersonalInfoTitle>
                <div
                  onClick={() => {
                    console.log(showAddModal, modalContent);
                    setShowAddModal(true);
                    setModalContent(<AddComment />);
                    setModalTitle('Editar Información Personal');
                  }}
                >
                  <ButtonLink size="16px">Edit</ButtonLink>
                </div>
              </PersonalInfoHeader>
              <PersonalInfoBody>
                <PersonalInfoGroup>
                  <PersonalInfoType>Nombre y Apellido</PersonalInfoType>
                  <PersonalInfoData>
                    {paciente.nombre}, {paciente.apellido}
                  </PersonalInfoData>
                </PersonalInfoGroup>
                <PersonalInfoGroup>
                  <PersonalInfoType>Dni</PersonalInfoType>
                  <PersonalInfoData>{paciente.dni}</PersonalInfoData>
                </PersonalInfoGroup>
                <PersonalInfoGroup>
                  <PersonalInfoType>Teléfono</PersonalInfoType>
                  <PersonalInfoData>{paciente.telefono}</PersonalInfoData>
                </PersonalInfoGroup>
                <PersonalInfoGroup>
                  <PersonalInfoType>Dirección</PersonalInfoType>
                  <PersonalInfoData>{paciente.direccion}</PersonalInfoData>
                </PersonalInfoGroup>
                <PersonalInfoGroup>
                  <PersonalInfoType>Mutual y N°</PersonalInfoType>
                  <PersonalInfoData>
                    {paciente.mutual} - {paciente.num_socio}
                  </PersonalInfoData>
                </PersonalInfoGroup>
                <PersonalInfoGroup>
                  <PersonalInfoType>Grupo y Factor Sang.</PersonalInfoType>
                  <PersonalInfoData>
                    {paciente.grup_sang}
                    {paciente.fact_sang}
                  </PersonalInfoData>
                </PersonalInfoGroup>
              </PersonalInfoBody>
            </PersonalInfoContainer>

            <PersonalInfoContainer className="comments">
              <PersonalInfoHeader>
                <PersonalInfoTitle>Comentarios</PersonalInfoTitle>
              </PersonalInfoHeader>
              <CommentBodyContainer>
                {currentComments.map((item, idx) => (
                  <CommentContainer key={idx}>
                    <CommentHeader>
                      <CommentGroup>
                        <CommentType>Fecha:</CommentType>
                        <CommentData>{item.fecha_hist}</CommentData>
                      </CommentGroup>
                      <CommentGroup>
                        <CommentType>Médico:</CommentType>
                        <CommentData>{item.medico_hist}</CommentData>
                      </CommentGroup>
                      <CommentGroup>
                        <CommentType>Especialidad:</CommentType>
                        <CommentData>{item.rama_hist}</CommentData>
                      </CommentGroup>
                    </CommentHeader>
                    <CommentBody>
                      <CommentGroup>
                        <CommentType>Comentario:</CommentType>
                        <CommentData>{item.comentario_hist}</CommentData>
                      </CommentGroup>
                    </CommentBody>
                    <ViewCommentBottonContainer>
                      <div
                        onClick={() => {
                          setShowAddModal(!showAddModal);
                          //TO DO - Componente para mostrar los comentarios
                          setModalContent(<AddComment />);
                          setModalTitle('Comentario');
                        }}
                      >
                        <ButtonLink size="14px">Ver Comentario</ButtonLink>
                      </div>
                    </ViewCommentBottonContainer>
                  </CommentContainer>
                ))}

                <AddCommentButton
                  onClick={() => {
                    setShowAddModal(!showAddModal);
                    setModalContent(<AddComment />);
                    setModalTitle('Agregar Comentario');
                  }}
                >
                  Agregar Comentario
                </AddCommentButton>
              </CommentBodyContainer>
            </PersonalInfoContainer>
            {showAddModal ? (
              <ModalTemplate
                onCloseIconClick={() => setShowAddModal(false)}
                title={modalTitle}
                content={modalContent}
              />
            ) : null}
            <PaginationContainer>
              <Pagination
                commentsPerPage={commentsPerPage}
                currentPage={currentPage}
                totalComments={paciente.historial.length}
                paginate={paginate}
              />
            </PaginationContainer>
          </>
        ) : (
          <InfoTitle>Ups, parece que no hay nadie con ese DNI.</InfoTitle>
        )}
      </InfoContainer>
    </Contenedor>
  );
};

export default InfoPaciente;

const Contenedor = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: lightgray;
`;

const PersonalInfoContainer = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  flex-direction: column;
  box-sizing: border-box;
  margin: 16px;

  .comments {
    flex: 2;
  }
`;

const PersonalInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 8px;
`;

const PersonalInfoTitle = styled.span`
  font-weight: bold;
  font-size: 24px;
`;

const PersonalInfoBody = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 8px;
`;

const PersonalInfoGroup = styled.div`
  display: flex;
`;

const PersonalInfoType = styled.label`
  display: flex;
  justify-content: flex-end;
  width: 30%;
  font-size: 16px;
  margin-left: 32px;
  color: gray;
`;

const PersonalInfoData = styled.span`
  margin-left: 12px;
  font-size: 16px;
`;

const CommentContainer = styled.div`
  height: 110px;
  border: solid 1px lightgray;
  box-shadow: 0 1px 1px black;
  padding: 8px;
  margin: 4px;
`;

const CommentBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 8px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CommentBody = styled.div`
  display: flex;
  margin-top: 8px;
  padding-top: 16px;
  border-top: 1px solid lightgray;
`;

const CommentGroup = styled.div`
  display: flex;
`;

const CommentType = styled.label`
  display: flex;
  font-size: 16px;
  color: gray;
`;

const CommentData = styled.span`
  margin-left: 6px;
  font-size: 16px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ViewCommentBottonContainer = styled.div`
  display: flex;
  margin: auto;
  margin-right: 0;
  width: 150px;
`;

const AddCommentButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  margin: 16px auto;
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

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const InfoTitle = styled.h2`
  width: 100%;
  text-align: center;
  margin: 16px 0px 0px 0px;
`;
