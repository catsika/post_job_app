const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
import { appendFile, readdirSync } from 'fs';
import cors from 'cors';

const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: 'true' }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
const server = require('http').createServer(app);

const io = require('socket.io')(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
    ],
    credentials: true,
  },
});

//dov env config
const port = process.env.PORT;

//middleware configuration

//database config
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection established'))
  .catch((err) => console.log(err, 'Caused A DB Connection Failure'));

//initalize server

readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));

server.listen(port, () => console.log(`Connected to port ${port}`));
