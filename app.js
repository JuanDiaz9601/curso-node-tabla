const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");
const colors = require("colors");

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado".rainbow))
  .catch((err) => console.log(err));

//console.log(process.argv);

//process.argv genera un arreglo con dos posiciones la ruta de node y la ruta del archivo, por consola podemos añadir argumentos y desetructurarlos, le enviamos la base como argumento --base=5, ignoramos la dos posiciones iniciales y asignamos un nombre al argumente en la tercera posicion
//const [, , arg3 = 5] = process.argv;
//el argv3 (--base=5) al usar el metodo split("=") genera dos posiciones --base 5 por eso en la desestructuracion queda [, base] asignamos el nombre base a la segunda posicion
//const [, base = 5] = arg3.split("=");

//const base = 5;
