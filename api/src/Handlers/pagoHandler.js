const getPagoHandler = (req, res)=>{
    const {id} = req.params;
    res.status(200).send("aca estan todos los pagos");
 }
 const postPagoHandler = (req, res)=>{
    const pago = req.body;
   res.status(200).send("post pagos");
}

module.exports= {
    getPagoHandler,
    postPagoHandler
}