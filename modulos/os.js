
const os = require('os');
console.log(os.arch());

/*
const { arch } = require('os');

console.log(arch());
*/

//console.log(os.platform());
/*
console.log(os.cpus().length); //cantidad de cpus
console.log(os.constants); //errores del  sistema

console.log(os.freemem());// memoria libre en bits

console.log(os.totalmem());//memoria total

console.log(os.homedir());// directorio raiz de usuario
 
console.log(os.tmpdir());// directorio temporal y luego se borra

console.log(os.hostname());// nombre de host de la maquina
*/

console.log(os.networkInterfaces()); // red

