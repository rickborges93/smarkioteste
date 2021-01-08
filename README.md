# Smarkio - Teste IBM Watson
Teste prático para desenvolvedor NodeJS consumindo a API IBM Watson TextToSpeech.

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [Mysql](https://www.npmjs.com/package/mysql)
- [Watson](https://www.npmjs.com/package/ibm-watson)
- [Fs](https://www.npmjs.com/package/fs)
- [Wav](https://www.npmjs.com/package/wav)
- [Speaker](https://www.npmjs.com/package/speaker)

## Como Utilizar

1. Clone o repositório.

```
git clone https://github.com/rickborges93/smarkioteste.git
```

2. Instale as dependências.

```
npm install
```
3. Crie um banco de dados e insira a tabela abaixo.

``` 
CREATE TABLE IF NOT EXISTS `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `texto` text COLLATE latin1_general_ci DEFAULT NULL,
  `data` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;
COMMIT;
```

4. Altere as configurações no arquivo .env.

```
# PORTA EM QUE A API FICARÁ OPERANTE
PORT=3000

# CONFIGURAÇÕES DO DATABASE
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=smarkio

# IBM WATSON
IBM_KEY=
IBM_URL=
```

5. Acesse o terminal no diretório /smarkioteste e execute o comando:

```
npm start
```

6. Acesse a pasta "public" e abra o arquivo "index.html".

7. Usufrua da aplicação.

