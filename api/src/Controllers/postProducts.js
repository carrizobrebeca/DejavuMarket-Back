const { Productos } = require('../db');

const postProducts = async (nombre, descripcion, precio, imagen, categoria, stock) => {

  return await Productos.create({ nombre, descripcion, precio, imagen, categoria, stock });

};

module.exports = {postProducts};
