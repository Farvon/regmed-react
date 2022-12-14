import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/pacients';

const user = JSON.parse(localStorage.getItem('loggedRegMedUser'));
const token = user && user.token && `Bearer ${user.token}`;

//obtener todos los pacientes
const getAllPacients = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
//obtener paciente por DNI
const getPacientByDni = (dni) => {
  const request = axios.get(`${baseUrl}/${dni}`);
  return request.then((response) => response.data[0]);
};

//Edita un paciente
const putPacientComment = (dni, comment) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.put(
    `${baseUrl}/add-new-comment/${dni}`,
    comment,
    config
  );

  return request.then((response) => response.data);
};

//Crea nuevo Paciente
const postNewPacient = (newPacient) => {
  const config = {
    headers: {
      Authorization: token,
    },
  };

  const request = axios.post(baseUrl, newPacient, config);

  return request.then((response) => response.data);
};

//Edita info de Paciente
const editPacientInfo = (dni, newInfo) => {
  const config = {
    //Enviamos por header el token
    headers: {
      Authorization: token,
    },
  };

  const request = axios.put(`${baseUrl}/edit-info/${dni}`, newInfo, config);

  return request.then((response) => response.data);
};

export {
  getAllPacients,
  getPacientByDni,
  putPacientComment,
  postNewPacient,
  editPacientInfo,
};
