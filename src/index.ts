import 'reflect-metadata'

import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {createConnection} from 'typeorm'

import userRuotes from './routes/user.routes';
const app = express();
createConnection();

//Middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json())

//Rutas
app.use(userRuotes)

app.listen(3000, () => {
    console.log('Lo mismo la chicha que la limonada')
})