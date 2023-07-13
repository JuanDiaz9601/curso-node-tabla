const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    demandOption: true,
    default: 10,
    describe: "Hasta que numero se va a multiplicar la base",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que se un numero";
    }
    return true;
  }).argv;

module.exports = argv;
