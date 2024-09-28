const { Producto } = require('../db');


const getProductos = async (nombre) => {
 

    const productosDb = await Producto.findAll({
      where: nombre === nombre // Aplica la cláusula 'where' para filtrar los productos.
    });

    if (productosDb.length === 0) {
      return res.status(404).json({ message: 'No se encontraron productos.' });
    }

    return res.status(200).json(productosDb);
 
};

module.exports = getProductos;


