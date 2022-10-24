const pacientsRouter = require('express').Router();
const Pacient = require('../models/Pacient');
const userExtractor = require('../middleware/userExtractor');

pacientsRouter.get('/', (request, response) => {
  Pacient.find({}).then((pacients) => {
    response.json(pacients);
  });
});

pacientsRouter.get('/:dni', (request, response, next) => {
  const { dni } = request.params;

  Pacient.find({ dni })
    .then((pacient) => {
      if (pacient && pacient.length) {
        return response.json(pacient);
      } else {
        response.status(404).end();
      }
    })
    .catch((err) => {
      next(err);
    });
});

pacientsRouter.post('/', userExtractor, (request, response) => {
  const pacient = request.body;

  if (!pacient.dni || !pacient.nombre || !pacient.apellido) {
    return response.status(400).json({
      error: 'Los campos nombre, apellido y dni son requeridos',
    });
  }

  const newPacient = new Pacient({
    nombre: pacient.nombre,
    apellido: pacient.apellido,
    dni: pacient.dni,
    telefono: pacient.telefono,
    direccion: pacient.direccion,
    mutual: pacient.mutual,
    num_socio: pacient.num_socio,
    grup_sang: pacient.grup_sang,
    fact_sang: pacient.fact_sang,
    historial: pacient.historial,
  });

  newPacient
    .save()
    .then((savedPacient) => {
      response.json(savedPacient);
    })
    .catch((err) => {
      console.log(err);
      response.status(400).end();
    });
});

pacientsRouter.delete('/:dni', userExtractor, (request, response, next) => {
  const { dni } = request.params;

  Pacient.findOneAndDelete({ dni })
    .then(() => {
      response.status(204).end();
    })
    .catch((err) => next(err));
});

pacientsRouter.put(
  '/add-new-comment/:dni',
  userExtractor,
  (request, response) => {
    const { dni } = request.params;
    const comment = request.body;

    const newComment = {
      fecha_hist: comment.fecha_hist,
      medico_hist: comment.medico_hist,
      rama_hist: comment.rama_hist,
      comentario_hist: comment.comentario_hist,
    };

    Pacient.findOneAndUpdate(
      { dni },
      { $push: { historial: newComment } },
      { new: true }
    )
      .then((result) => {
        response.json(result);
      })
      .catch((err) => {
        console.log(err);
        response.status(400).end();
      });
  }
);

module.exports = pacientsRouter;
