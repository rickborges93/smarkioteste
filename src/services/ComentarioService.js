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
    },

    listen: async (texto) => {

        const fs = require('fs').promises;
        const wav = require('wav');
        const Speaker = require('speaker');
        const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
        const { IamAuthenticator } = require('ibm-watson/auth');

        const textToSpeech = new TextToSpeechV1({
            authenticator: new IamAuthenticator({
                apikey: `${process.env.IBM_KEY}`,
            }),
            serviceUrl: `${process.env.IBM_URL}`,
            disableSslVerification: true,
        });

        const reader = new wav.Reader();
        reader.on('format', function (format) {
            reader.pipe(new Speaker(format));
        });

        let synthesizeParams = {
            text: texto,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaV3Voice',
        };

        await textToSpeech.synthesize(synthesizeParams)
        .then(response => {
            response.result.pipe(reader);
        })
        .catch(err => {
            console.log('error:', err);
        });
    }
};