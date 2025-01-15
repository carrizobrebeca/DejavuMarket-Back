const express = require('express');

const morgan = require('morgan');
const router = require('./Routes/router');
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: 'https://carrizobrebeca.github.io/DejaVuMarket/', 
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true, 
};


app.use(cors(corsOptions));
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
  });

app.use(express.json());


app.use(router);



module.exports = app;
