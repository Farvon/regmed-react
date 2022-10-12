import { defaultDatabase } from '../bd/defaultDatabase';

const getLocalStorageData = () => {
  const database = localStorage.getItem('database');
  if (database !== null) {
    return JSON.parse(database);
  } else {
    localStorage.setItem('database', JSON.stringify(defaultDatabase));
    return defaultDatabase;
  }
};

const setLocalStorageData = (data) => {
  localStorage.setItem('database', JSON.stringify(data));
};

export { getLocalStorageData, setLocalStorageData };
