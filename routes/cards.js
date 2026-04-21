const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
      return;
    }

    try {
      const cards = JSON.parse(data);
      res.send(cards);
    } catch (e) {
      res.status(500).send({ message: 'Ha ocurrido un error en el servidor' });
    }
  });
});

module.exports = router;
