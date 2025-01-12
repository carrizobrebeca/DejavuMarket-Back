require("dotenv").config();
const { Sequelize } = require("sequelize");
const productsModel = require("./Models/productsModel");

const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(DATABASE_URL, {
  logging: false,
  native: false,
});

// Carga de modelos
const Producto = productsModel(sequelize);

// Función para probar la conexión
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión establecida con éxito.');

    const results = await sequelize.query('SELECT * FROM Producto');
    console.log('Resultados:', results);
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
};

// Función para sincronizar modelos
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true }); // Cambia a { force: true } si es necesario
    console.log("Modelos sincronizados con éxito.");
  } catch (error) {
    console.error("Error durante la sincronización:", error);
  }
};

// Ejecutar pruebas y sincronización
const run = async () => {
  await testConnection();
  await syncModels();
};

run();

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

// require("dotenv").config();
// const { Sequelize } = require("sequelize");
// const fs = require("fs");
// const path = require("path");
// const usuarioModel = require("./Models/usuarioModel");
// const productsModel = require("./Models/productsModel");

// const carritoModel = require("./Models/carritoModel");


// // const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;


// // const sequelize = new Sequelize(
// //   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
// //   {
// //     logging: false,
// //     native: false,
// //   }
// // );

// const { DATABASE_URL } = process.env;

// const sequelize = new Sequelize(DATABASE_URL, {
//   logging: false,
//   native: false,
// });
// const testConnection = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Conexión establecida con éxito.');

//     // Ejecuta una consulta después de la autenticación
//     const results = await sequelize.query('SELECT * FROM Producto'); // Cambia 'tu_tabla' por el nombre de tu tabla
//     console.log('Resultados:', results);

//   } catch (error) {
//     console.error('No se pudo conectar a la base de datos:', error);
//   } finally {
//     // Cierra la conexión al final
//     await sequelize.close();
//   }
// };

// testConnection();

// // usuarioModel(sequelize);
// productsModel(sequelize);
// // carritoModel(sequelize);
// // pagoModel(sequelize);// // En sequelize.models están todos los modelos importados como propiedades
// // const { pProducto} = sequelize.models;

// // Usuario.hasOne(Carrito, { foreignKey: "usuarioId" });
// // Carrito.belongsTo(Usuario, { foreignKey: "usuarioId" });

// // Carrito.belongsToMany(Producto, { through: "Carrito_Producto" });
// // Producto.belongsToMany(Carrito, { through: "Carrito_Producto" });

// // Carrito.hasOne(Pago, { foreignKey: "carritoId" });
// // Pago.belongsTo(Carrito, { foreignKey: "carritoId" });
// // Sincroniza la base de datos


// module.exports = {
//   ...sequelize.models,
//   conn: sequelize, 
// };
