const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt' );
readableStream.setEncoding('UTF8'); 
//ya que estamos poniendo 
// que el stream viene en formato UTF8 chunk no hay 
//que convertirlo en.toString()
/*
readableStream.on('data', function (chunck) {
    data += chunck;
});

readableStream.on('end', function(){
    console.log(data);  
});
*/

/*
process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal');
*/

/*
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Trasform);
*/

const Transform = stream.Transform;

class Mayus extends Transform {
    _transform(chunk, codif, cb) {
        let chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        cb();
    }
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout)
