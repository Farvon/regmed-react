export async function getPacientes() {
  try {
    const response = await fetch('./src/bd/pacientes.json');
    if (response.ok) {
      const pacientes = response.json();
      return pacientes;
    } else {
      console.log('Respuesta de red OK pero respuesta de HTTP no OK');
    }
  } catch (error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  }
}
