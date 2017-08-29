
const { app, BrowserWindow } = require ('electron');

const path = require ('path');
const url = require ('url');

let mainWindow = null;

function onAppReady ()
{
    let position = [ 200, 100 ];

    console.log ('init:', position);

    mainWindow = new BrowserWindow ({ x: position[0], y: position[1], width: 800, height: 600, show: false });

    console.log ('new:', mainWindow.getPosition ());

    mainWindow.loadURL (`file://${__dirname}/index.html`);

    mainWindow.on ('ready-to-show', () => { mainWindow.show (); console.log ('show:', mainWindow.getPosition ()); });

    mainWindow.on ('close', () => { console.log ('close:', mainWindow.getPosition ()); });

    mainWindow.on ('closed', () => { app.quit (); });
}

app.on ('ready', onAppReady);

