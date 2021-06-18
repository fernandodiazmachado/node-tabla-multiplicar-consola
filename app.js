const { boolean } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//console.clear();

// Para leer por consola, no es recomendado este metodo, sinó yargs: {
//        const [,,arg3 = 'base=5'] = process.argv
//        const [,base = 5] = arg3.split('=');
//        console.log( base );
//}

// console.log(process.argv);
// console.log(argv);
// console.log(argv);

crearArchivo( argv.b, argv.l , argv.h)
  .then(nombreArchivo=>console.log(nombreArchivo.rainbow, 'creado'))
  .catch(err=>console.log(err));