const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/User');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { username, password, name, registration_number } = request.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: passwordHash,
    name,
    registration_number,
  });

  try {
    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    response.status(400).end();
  }
});

module.exports = usersRouter;
