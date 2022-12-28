function hola(nombre, miCallback) {
    
    setTimeout(()=>{
        console.log("Hola "+ nombre);
        miCallback(nombre);
    },3000);
}
function hablar (callbackHablar){
    setTimeout(function(){
        console.log("Bla bla bla bla bla...");
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback){
    setTimeout(function() {
        console.log('Adios '+nombre)   
        otroCallback();
    }, 1000)
}

const conversation = (nombre, veces, callback)=>{
    if(veces >0 ){
        hablar(()=>{
            conversation(nombre, --veces, callback);

        })
    }else{
        callback();
    }
  
}

// --

console.log("Iniciando proceso");
hola('Jason', (nombre)=>{

    conversation(nombre, 3,() => adios(nombre, ()=>{
        console.log('Terminamos')
    }));
    
/*    hablar(()=>{    
        hablar(()=>{
            hablar(()=>{
                adios(nombre,()=> {
                console.log("terminando proceso");
                })}
            )
        })
    })*/
});