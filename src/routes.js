const express = require('express');
const router = express.Router();

const ComentarioController = require('./controllers/ComentarioController');

router.get('/server', ComentarioController.server);

router.get('/comentarios', ComentarioController.all);
router.post('/comentario', ComentarioController.new);
router.get('/comentario/:id', ComentarioController.listen);

module.exports = router;