const { Producto } = require('../db');


const getProducts = async (nombre) => {
 

  let whereClause = {};  // Declaramos una cláusula where vacía

  // Si se pasa el nombre, agregamos el filtro a la cláusula where
  if (nombre) {
    whereClause = {
      nombre: nombre  // Filtramos por el nombre que viene como argumento
    };
  }

  // Hacemos la consulta con el filtro correspondiente
  const productosDb = await Producto.findAll({
    where: whereClause
  });
    return productosDb
 
};

module.exports = {getProducts};


