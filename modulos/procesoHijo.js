const { exec, spawn } = require('child_process');
//const exec = require('child_process').exec;

//son dos formas de hacer lo mismo ya que { exec } estamos 
//desestructurando al obseto child_process

// ejecuta otro script desde terminal
/*
exec('node modulos/errores.js', (err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }

    console.log(stdout);
})
*/

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log(proceso.killed);

    console.log(dato.toString());
    console.log(proceso.killed);
});

proceso.on('exit', ()=>{
    console.log('el proceso terminó');
});