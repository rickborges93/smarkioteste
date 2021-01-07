const db = require('../db');

module.exports = {

    getAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM comentarios', (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(results);
            });
        });
    },

    add: (texto) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO comentarios (texto) VALUES (?)',
                [texto],
                (error, results) => {
                if (error) {
                    reject(error);
                    return;
                }

                resolve(results.insertId);
            });
        });
    }
};