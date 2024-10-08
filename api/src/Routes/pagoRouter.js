const {Router} = require('express');
const { getPagoHandler, postPagoHandler } = require('../Handlers/pagoHandler');

const pagoRouter = Router();

pagoRouter.get("/", getPagoHandler)
 
pagoRouter.post("/", postPagoHandler)
 
 module.exports = pagoRouter;