const bcrypt = require('bcrypt');
const usersRouter = require('express').Router();
const User = require('../models/User');

usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.post('/', async (request, response) => {
  const { username, password, name, registration_number, type } = request.body;

  const passwordHash = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    password: passwordHash,
    name,
    registration_number,
    type,
    enabled: false,
  });

  try {
    const savedUser = await user.save();
    response.status(201).json(savedUser);
  } catch (err) {
    console.log(err);
    response.status(400).end();
  }
});

usersRouter.put('/:username', async (request, response) => {
  const { username } = request.params;

  try {
    const userUpdated = await User.findOneAndUpdate(
      { username },
      { enabled: true },
      { new: true }
    );
    response.json(userUpdated);
  } catch (err) {
    console.log(err);
    response.status(404).end();
  }
});

module.exports = usersRouter;
