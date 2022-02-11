const argv = require('yargs') // para leer argumento a el ejecutar programas 
                .option('b', { // objeto para la opcion de argumento
                    alias: 'base', // alias completo de el argumento 
                    type: 'number', // tipo de el argumento
                    description: 'Base de la tabla', // descripcion de el argumento, la cual sera incluida en el help
                    demandOption: true // si es obligatorio ...
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    description: 'Desea listar en pantalla ????'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'nunmber',
                    default: 10,
                    description: 'Hasta que valor deseas la tabla ?'
                })
                .check( (argv, options) => {
                    if ( isNaN( argv.b )) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .argv;

module.exports = argv;