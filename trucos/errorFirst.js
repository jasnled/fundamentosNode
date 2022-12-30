

function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        }catch (e) {
            callback(e, null);
        }
    }, 1000);
}

asincrona(function(err, dato) {
    if(err){
        console.error('Tenemos un error');
        console.error(err);
        //throw err; para generar un error // no funciona
        return false;
    }
    console.log('todo ha ido bien, mi data es: ', data);
});