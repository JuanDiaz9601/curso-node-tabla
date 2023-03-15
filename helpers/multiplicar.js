const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base, listar, limite) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= limite; i++) {
      salida += `${base} * ${i} = ${base * i}\n`;
      consola += `${base} ${"*".green} ${i} ${"=".green} ${base * i}\n`;
    }

    if (listar === true) {
      console.log("======================".green);
      console.log("     TABLA DEL: ".green, colors.blue(base));
      console.log("======================".green);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
