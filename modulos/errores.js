
function otraFuncion(){
    serompe();
}

function serompe() {
    return 3 + Z;
}

function seRompeAsincrona(cb){
    setTimeout(function (){
        try{
            return 3 + z;
        }
        catch(err){
            //console.error(err.message);
            cb(err);
        }
    }, 1000)
}

try {
    //otraFuncion();
    seRompeAsincrona((err) => {
        console.error(err.message);
    } );
}
catch (err){
console.error('Algo se ha roto');
console.error(err.message)
}

console.log('esta al final'); 