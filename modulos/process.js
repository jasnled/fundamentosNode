// no es necesario importar el modulo ya que viene
// como modulo global
// const p = require('process');


process.on('beforeExit', () => {         // antes de terminar
    console.log('el proceso va a terminar');

});

process.on('exit', () => {        // cuando ya finalizo el proceso
    console.log('El proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca'); 
        // ya que esta desconectado 
    }, 0);
});

//process.on('uncaughtRejection'); // cuando una promesa se ha roto 

//captura un error que no se habia capturado
process.on('uncaughtException', (err, origen) => {
    
    console.error('Vaya se nos ha olvidado capturar');
    console.error(err);

});

functionQueNoExiste();

// se puede 
console.log('Esto si el error no se recoje, no sale');

