import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

export const registerNewUser = async (newUser) => {
  const request = axios.post(baseUrl, newUser);

  return request.then((response) => response.data);
};
