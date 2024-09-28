const { getProducts } = require("../Controllers/getProducts");
const {postProducts} = require("../Controllers/postProducts");


const getProductHandler = async (req, res)=>{
    const {nombre} = req.query;
    try {
      const result = nombre ? await getProducts(nombre) : await getProducts();
      res.status(200).json(result);
    } catch (error) {
      
    }
 }
 const postProductHandler = async (req, res)=>{
 const {nombre, descripcion, precio, imagen, categoria, stock } = req.body;
 try {
    const response = await postProducts(nombre, descripcion, precio, imagen, categoria, stock );
    res.status(200).json(response);
 } catch (error) {
    res.status(400).json({error: error.message});
 }  

}
 
module.exports= {
    getProductHandler,
    postProductHandler
}