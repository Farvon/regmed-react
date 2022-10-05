// export async function getPacientesByDni(dni) {
//   // console.log(dni);
//   await fetch('./src/bd/pacientes.json')
//     .then((response) => response.json())
//     .then((pacientes) => {
//       console.log(pacientes);
//       return pacientes;
//     });
// }

export async function getPacientesByDni(dni) {
  try {
    const response = await fetch('./src/bd/pacientes.json');
    if (response.ok) {
      const Pacientes = response.json();
      return Pacientes;
    } else {
      console.log('Respuesta de red OK pero respuesta de HTTP no OK');
    }
  } catch (error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  }
}
