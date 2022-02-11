const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

// Imprimir argumentos 
//console.log(process.argv);
//console.log(argv);

console.log('base: yargs', argv.b);
console.log('listar: yargs', argv.l);
console.log('hasta: yargs', argv.h);

// Como se haria sin el yargs
//console.log(process.argv);
//const [ , , arg3 = 'base=5' ] = process.argv;
//const [ , base = 5 ] = arg3.split('=');

//const base = 2;

//crearArchivo( argv.base, argv.l )
//    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
//    .catch(  err => console.log(err));


crearArchivo2( argv.base, argv.l, argv.h )
    .then( nombreArchivo2 => console.log(nombreArchivo2.zebra, 'creado 2'))
    .catch(  err => console.log(err));