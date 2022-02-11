const fs = require('fs');
const colors = require('colors');

const crearArchivo = ( base = 5, l ) => {

    return new Promise ( (res, rej) => {

    console.log('===================='.green);
    console.log(`     Tabla del: ${base}`.blue);
    console.log('===================='.green);


    let salida = '';
    let salida2 = '';

    for(let i = 1; i<= 10; i++) {
        let resultado = base * i;
        salida += (`${ base } X ${ i } = ${ resultado }\n`);
        console.log(colors.green(base), 'X'.yellow, colors.green(i), '='.yellow, colors.red(resultado));
    }

    if(l)
        //console.log(salida2);

    fs.writeFileSync(`tabla-${ base }.txt`, salida)

    //console.log(salida);
    res(`tabla-${ base }`);

    })
}

const crearArchivo2 = async ( base = 5, l, hasta ) => {

    try {
        
    console.log('===================='.green);
    console.log('   Tabla del', colors.blue(base), 'hasta', colors.blue(hasta));
    console.log('===================='.green);


    let salida = '';

    for(let i = 1; i<= hasta; i++) {
        let resultado = base * i;
        salida += (`${ base } X ${ i } = ${ resultado }\n`);
        if (l){
            console.log(colors.green(base), 'X'.yellow, colors.green(i), '='.yellow, colors.red(resultado));
        }
    }

    //if(l) {
    //    console.log(salida);
    //}
    fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida)

    //console.log(salida);
    return `tabla-${ base }`;

    } catch (error) {
        throw error;
    }

    

}

module.exports = { crearArchivo, crearArchivo2 };