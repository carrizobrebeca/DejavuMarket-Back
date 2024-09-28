const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // Define el modelo de Usuario
  sequelize.define('Usuario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, // Genera un UUIDv4 por defecto
      primaryKey: true, // Establece el ID como clave primaria
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false, // El campo 'nombre' es obligatorio
    },
    googleID: {
      type: DataTypes.STRING,
      allowNull: true, // El campo 'googleID' es opcional
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false, // El campo 'apellido' es obligatorio
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // El campo 'email' es obligatorio
      unique: true, // El email debe ser único en la base de datos
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // El campo 'password' es opcional si el usuario usa Google
    },
    imagen: { 
      type: DataTypes.STRING,
      allowNull: true, // El campo 'imagen' es opcional
    },
  
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true, // Se llena cuando el usuario solicita el restablecimiento de contraseña
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true, // Fecha límite para que el token de restablecimiento sea válido
    },
  }, {
    timestamps: true,
  });
};

  