function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Hola "+ nombre);
            resolve(nombre);
        },3000);
    });
    
}
function hablar (nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("Bla bla bla bla bla...");
            resolve(nombre);
        },1000)
    })
}
 

function adios(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log('Adios '+nombre)   
            reject('hay un error');

        }, 1000)
    })
    
}
console.log('Iniciando el proceso...');
hola('Jason')
    .then(hablar)    
    .then(hablar)
    .then(adios)
    
    .then((nombre)=>{
        console.log('Terminando el proceso...');

    })
    .catch('hubo un error')
    .catch(error => {
        console.error('ha habido un error: ');    
        console.error(error); 
    });