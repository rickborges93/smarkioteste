const ComentarioService = require('../services/ComentarioService');

module.exports = {
    server: (req, res) => {
        res.json({server: true});
    },

    all: async (req, res) => {
        let json = { error: '', result:[] };
        let comentarios = await ComentarioService.getAll();

        for(let i in comentarios) {
            json.result.push({
                id: comentarios[i].id,
                comentario: comentarios[i].texto
            });
        }

        res.json(json);
    },

    new: async (req, res) => {
        let json = { error: '', result:[] };
        let texto = req.body.texto;

        if (texto) {
            let comentarioId = await ComentarioService.add(texto);

            json.result = {
                id: comentarioId,
                comentario: texto
            };

        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    listen: (req, res) => {
        let json = { error: '', result:[] };
        let texto = req.query.texto;

        if (texto) {
            let audio = ComentarioService.listen(texto);

            json.result = {
                success: true
            }

        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },
};