import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/pacients';

const user = JSON.parse(localStorage.getItem('loggedRegMedUser'));
const token = user && user.token && `Bearer ${user.token}`;

const getAllPacients = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getPacientByDni = (dni) => {
  const request = axios.get(`${baseUrl}/${dni}`);
  return request.then((response) => response.data[0]);
};

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

export { getAllPacients, getPacientByDni, putPacientComment };
