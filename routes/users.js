const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const readUsers = (res, callback) => {
  fs.readFile(usersPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
      return;
    }

    try {
      const users = JSON.parse(data);
      callback(users);
    } catch (e) {
      res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    }
  });
};

// GET /users
router.get('/', (req, res) => {
  readUsers(res, (users) => {
    res.send(users);
  });
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  readUsers(res, (users) => {
    const user = users.find((item) => item._id === id);

    if (!user) {
      res.status(404).send({ message: 'ID de usuario no encontrado' });
      return;
    }

    res.send(user);
  });
});

module.exports = router;
