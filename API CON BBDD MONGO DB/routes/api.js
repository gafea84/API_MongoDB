const router = require('express').Router();

const apiAutoresRouter = require('./api/autores');

router.use('/autores', apiAutoresRouter);

module.exports = router;
