const express = require('express');
const router = express.Router();

const ComentarioController = require('./controllers/ComentarioController');

router.get('/server', ComentarioController.server);

module.exports = router;