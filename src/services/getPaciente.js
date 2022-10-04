import React, { useState, useEffect } from 'react';

function getPacientes() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch('../db/pacientes.json')
      .then((response) => {
        return response.json();
      })
      .then((pacientes) => {
        setPacientes(pacientes);
      });
    console.log(pacientes);
  }, []);

  return pacientes;
}

export default getPacientes;
