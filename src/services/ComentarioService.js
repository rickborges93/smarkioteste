const db = require('../db');

const fs = require('fs').promises;
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
        apikey: `${process.env.IBM_KEY}`,
    }),
    serviceUrl: `${process.env.IBM_URL}`,
    disableSslVerification: true,
});

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

    listen: (texto) => {

        let AudioPatch = 'comentario/comentario.wav';

        fs.unlink(AudioPatch, (err) => {
            if (err) throw err;
            console.log('Arquivo deletado!');
        });

        let synthesizeParams = {
            text: texto,
            accept: 'audio/wav',
            voice: 'pt-BR_IsabelaV3Voice',
        };

        textToSpeech.synthesize(synthesizeParams)
        .then(response => {
            return textToSpeech.repairWavHeaderStream(response.result);
        })
        .then(async buffer => {
            await fs.writeFile(AudioPatch, buffer);
        })
        .catch(err => {
            console.log('error:', err);
        });
    }
};