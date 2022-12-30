const sharp = require('sharp');
sharp('original.png')
    .resize(80) // redimensionar a 80x80
    .grayscale()  // cambiar a grises
    .toFile('resized.png'); // asisgnar en archivo
    