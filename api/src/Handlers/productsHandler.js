const {postProducts} = require("../Controllers/postProducts");


const getProductHandler = (req, res)=>{
    const nombre = req.query;
    if(nombre) res.status(200).send(`user : ${nombre}`);
    res.status(200).send("aca estan todos los productos");
 }
 const postProductHandler = async (req, res)=>{
 const {nombre, descripcion, precio, imagen, categoria, stock } = req.body;
 try {
    const response = await postProducts(nombre, descripcion, precio, imagen, categoria, stock);
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error: error.message});
 }  

}
 
module.exports= {
    getProductHandler,
    postProductHandler
}