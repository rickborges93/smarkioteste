const ComentarioService = require('../services/ComentarioService');

module.exports = {
    server: (req, res) => {
        res.json({server: true});
    },

    all: (req, res) => {
        res.json({all: true});
    },
    new: (req, res) => {
        res.json({new: true});
    },
    listen: (req, res) => {
        res.json({listen: true});
    },
};