const {Router} = require('express');

const carritoRouter = Router();

carritoRouter.get("/",(req, res)=>{
    res.status(200).send("aca estan todos los carritos");
 })
 
 carritoRouter.post("/",(req, res)=>{
    res.status(200).send("crear carritos");
 })
 
 module.exports = carritoRouter;