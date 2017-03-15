const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/xkcd', (req, res) =>
  fetch('http://xkcd.com/info.0.json')
    .then(xkcdResponse => xkcdResponse.json())
    .then(xkcdResponse => res.json(xkcdResponse))
    .catch(err => res.sendStatus(500)));

module.exports = router;
