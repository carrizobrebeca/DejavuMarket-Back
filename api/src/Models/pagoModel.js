const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Pago', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    carritoId: {
      type: DataTypes.UUID,
      references: {
        model: 'Carrito',
        key: 'id',
      },
      allowNull: false,
    },
    metodo: {
      type: DataTypes.ENUM('mercado pago'),
      allowNull: false,
    },
   
  }, {
    
    timestamps: true, // Deshabilita los timestamps (createdAt y updatedAt)
  });
};
