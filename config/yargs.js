const argv = require('yargs')
  .option({
    'b':{
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe:'Base de la tabla de multiplicar'
    },
    'l':{
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla en consola'
    },
    'h':{
      alias: 'hasta',
      type: 'number',
      default: 10,
      describe: 'Indica hasta donde será la tabla'
    }
  })
  .check( (argv, options) => {
    if ( isNaN( argv.b )){
      throw 'La base tiene que ser un numero'
    }
    return true;
  })
  .argv;

module.exports = argv;