const {Router} = require('express');
const { getProductHandler, postProductHandler } = require('../Handlers/productsHandler');

const productsRouter = Router();


productsRouter.get("/", getProductHandler)
 
 productsRouter.post("/", postProductHandler)
 
 module.exports = productsRouter;