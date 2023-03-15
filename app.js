const { crearArchivo } = require("./helpers/multiplicar");
const colors = require("colors");
const argv = require("./config/yargs");

console.clear();

// -- const [ , , arg3 = 'base=5' ] = process.argv;
//Separamos el comando ingresado por consola con la base con el metodo para string split
// -- const [ , base = '5' ] = arg3.split('=');
// en ambos arreglos se les da un valor por defecto pero si le indicamos el valor por consola se asignara
//console.log(base);

crearArchivo(argv.base, argv.listar, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));
