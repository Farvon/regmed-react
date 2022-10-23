const { Schema, model } = require('mongoose');

// Creamos el esquema de los comentarios
const historialSchema = new Schema({
  fecha_hist: String,
  medico_hist: String,
  rama_hist: String,
  comentario_hist: String,
});

// Creamos el esquema del paciente
const pacientSchema = new Schema({
  nombre: String,
  apellido: String,
  dni: String,
  telefono: String,
  direccion: String,
  mutual: String,
  num_socio: String,
  grup_sang: String,
  fact_sang: String,
  historial: [historialSchema],
});

// Asignamos al modelo Paciente el esquema creado
const Pacient = model('Pacient', pacientSchema);

module.exports = Pacient;
