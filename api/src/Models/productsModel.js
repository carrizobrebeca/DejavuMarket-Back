const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Producto', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0, // Asegura que el stock sea mayor o igual a 0
      },
    },
    
  }, {
   
    timestamps: true, // Habilita los timestamps (createdAt y updatedAt)
  });
};
