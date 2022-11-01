import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

export const registerNewUser = async (newUser) => {
  const request = axios.post(baseUrl, newUser);

  return request.then((response) => response.data);
};

export const getUsers = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

export const enableUser = (username) => {
  const request = axios.put(`${baseUrl}/${username}`);

  return request.then((response) => response.data);
};
