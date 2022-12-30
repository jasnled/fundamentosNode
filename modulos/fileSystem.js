// nos permite acceder a archivos de nuestro sistema 
// leerlos, grabarlos modulos del sistema  
// grabado de disco
// base de datos

const fs = require('fs');
const { dirname } = require('path');

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err)=>{ // para escribir un archivo
        if(err){
            console.error('no he podido escribir', err);
        }else{
            console.log('se ha escrito correctamente');
        }
    });
};

function leer(ruta, cb){
    fs.readFile(ruta, (err, data)=>{
        cb(data.toString());

        // Leído
    });
};

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);

}

leer(__dirname+'/archivo.txt', console.log);

escribir(__dirname+'/archivo1.txt', 'esto es una prueba');
leer(__dirname+'/archivo1.txt', console.log);

borrar(__dirname + '/archivo1.txt',console.log);