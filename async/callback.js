function hola(nombre, miCallback) {
    
    setTimeout(()=>{
        console.log("Hola "+ nombre);
        miCallback(nombre);
    },3000);
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios '+nombre)   
    }, 1000)
}


console.log("Iniciando proceso");
hola('Jason', (nombre)=>{
    adios(nombre,()=> {
        console.log("terminando proceso");
    });
});

