const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} X ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("====================".gray);
      console.log("TABLA DEL: ".green + colors.blue(base));
      console.log("====================".gray);

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `Tabla del ${base}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
