// Como no se puede editar un json en 'caliente' tuve que guardar la base de datos en el localStorage
// Si existe, devuelve lo que este en localStorage, sino toma la default la crea en el localStorage y la devuelve donde llamen a getLocalStorageData
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

// TO DO - Una vez que tenemos la database en el localStorage podemos manipularla tranquilamente actualizando el estado con los valores nuevos
const setLocalStorageData = (data) => {
  localStorage.setItem('database', JSON.stringify(data));
};

export { getLocalStorageData, setLocalStorageData };
