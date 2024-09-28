const postUsuarios = require("../Controllers/postUsuarios");

const getUsersHandler = (req, res) => {
    const { nombre } = req.query;
    if(nombre) res.status(200).send(`user : ${nombre}`);
  res.status(200).send("aca estan todos los usuarios");
};
const postUsersHandler = async (req, res) => {
  const { nombre, apellido, email, password, imagen } = req.body;
  
  try {
    const response = await postProductos(nombre, apellido, email, password, imagen );
    res.status(200).jason(response);
 } catch (error) {
    res.status(400).jason({error: error.message});
 }  
};

module.exports = {
  getUsersHandler,
  postUsersHandler,
};
