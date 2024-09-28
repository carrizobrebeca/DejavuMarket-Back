const { Usuario } = require("../db");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

const postUsuarios = async (nombre, apellido, email, password, imagen) => {
  

    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res
        .status(400)
        .json({ error: "Ya existe un usuario con ese email." });
    }

    return await Usuario.create({
      nombre,
      apellido,
      imagen,
      email,
      password,
    });

};

module.exports = postUsuarios;
