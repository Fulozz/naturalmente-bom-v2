/**
 * file: app.js
 * description: arquivo responsável por fazer a conexão com arquivo 'server.js'
 * data: 16/09/2024
 * author: Thiago Silva Andrade
 */

import express from "express";
import cors from "cors";
import morgan from "morgan";


const app = express();


// => Rotas da API:

const index = require('./routes/index');



app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());
app.use(morgan('dev'));


app.use(index);



module.exports = app;