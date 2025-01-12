const { Producto } = require('../db');

const postProducts = async (nombre, descripcion, precio, imagen, categoria, stock) => {

  return await Producto.create({ nombre, descripcion, precio, imagen, categoria, stock });

};

module.exports = {postProducts};
