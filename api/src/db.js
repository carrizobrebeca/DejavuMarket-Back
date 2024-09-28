require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const usuarioModel = require("./Models/usuarioModel");
const productsModel = require("./Models/productsModel");

const carritoModel = require("./Models/carritoModel");


const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

// // Configura la conexión a la base de datos (para desarrollo, puedes descomentar la línea de abajo y comentar la de DB_DEPLOY)
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);



usuarioModel(sequelize);
productsModel(sequelize);
carritoModel(sequelize);
// pagoModel(sequelize);
// // En sequelize.models están todos los modelos importados como propiedades
const { Producto, Usuario, Carrito } = sequelize.models;

Usuario.hasOne(Carrito, { foreignKey: "usuarioId" });
Carrito.belongsTo(Usuario, { foreignKey: "usuarioId" });

Carrito.belongsToMany(Producto, { through: "Carrito_Producto" });
Producto.belongsToMany(Carrito, { through: "Carrito_Producto" });

// Carrito.hasOne(Pago, { foreignKey: "carritoId" });
// Pago.belongsTo(Carrito, { foreignKey: "carritoId" });
// Sincroniza la base de datos

// // Exporta la conexión y los modelos
module.exports = {
  ...sequelize.models,
  conn: sequelize, // Asegúrate de que conn esté exportado correctamente
};
