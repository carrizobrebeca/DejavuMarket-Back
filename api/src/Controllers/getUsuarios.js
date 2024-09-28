const { Usuario } = require('../db');

const getUsuarios = async (nombre) => {


    const usuarios = await Usuario.findAll({ where: nombre === nombre });

    if (usuarios.length === 0) {
      return res.status(404).json({ message: 'No se encontraron usuarios activos.' });
    } else {
      return res.status(200).json(usuarios);
    }
  
};

module.exports = getUsuarios;
