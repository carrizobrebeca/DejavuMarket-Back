const getCarritoHandler = (req, res)=>{
    const {id} = req.params;
    res.status(200).send("aca estan todos los pagos");
 }
 const postCarritoHandler = (req, res)=>{
    const carrito = req.body;
   res.status(200).send("post pagos");
}

module.exports= {
    getCarritoHandler,
    postCarritoHandler
}