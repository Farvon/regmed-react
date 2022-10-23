require('dotenv').config();
require('./mongo');

const express = require('express');
const app = express();
const cors = require('cors');

const notFound = require('./middleware/notFound');
const handleErrors = require('./middleware/handleErrors');
const pacientsRouter = require('./controllers/pacients');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('<h1>Welcome to RegMed API</h1>');
});

app.use('/api/pacients', pacientsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use(notFound);
app.use(handleErrors);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
