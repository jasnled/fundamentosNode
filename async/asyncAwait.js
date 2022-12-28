async function hola(nombre) { //convertimos un funcion en asincrona con el async
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Hola "+ nombre);
            resolve(nombre);
        },3000);
    });
    
}
async function hablar (nombre){
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
            

        }, 1000)
    })
    
}

async function main() {
    let nombre = await hola('Jason'); // ya que hola() return resolve(nombre)
    await hablar();
    await hablar();
    await hablar(); 
    await adios(nombre);
}
console.log('Iniciamos el proceso');

main();

console.log('Terminamos el proceso');