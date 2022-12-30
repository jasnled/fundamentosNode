const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana); // cuando este lista app llamara crearVentana

function crearVentana() {
    ventanaPrincipal = new BrowserWindow({ // crear ventana
        width: 800,
        height: 600,
    });

    ventanaPrincipal.loadFile('index.html'); //
}