import express from 'express';
import cors from 'cors';
import axios from 'axios';
import MarketRoutes from './Routes/MarketRoutes.js'

const app = express();
const port = 3001;
app.use(cors());

app.use(express.json());
app.use('/', MarketRoutes)

app.listen(port, ()=>{
    console.log(`Servidor escuchando en: localhost:${port}/`);
})