const { Producto } = require('../db');

const postProducts = async (nombre, descripcion, precio, categoria, stock, imagen) => {

  return await Producto.create({ nombre, descripcion, precio, categoria, stock, imagen });

};

module.exports = {postProducts};
