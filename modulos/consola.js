/*
console.log('algo');
console.info('algo'); // lo mismo que .log
console.error('error');
console.warn('advertencia');


const table = [
    {
        a:1,
        b:'sdad'
    },
    {
        a:2,
        b:'arew'
    }
];

console.table(table);

console.group('Conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('adios');
console.groupEnd('Conversacion');
*/

function function1(){
    console.group('function1');
    console.log('Esto es de la funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto es de la funcion 1');
    function2();
    console.log('hemos vuelto a la 1')
    console.groupEnd('function1');
}

function function2(){
    console.group('function2');
    console.log('ahora estamos en funcion 2');
    console.groupEnd('function2');

}

function1();


console.count('veces');
console.count('veces');
console.countReset('veces'); 
console.count('veces');