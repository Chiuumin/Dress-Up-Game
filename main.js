const {app, BrowserWindow} = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 520,
        height: 720,
        resizable:true,
        frame:true,
        autoHideMenuBar:true,
        icon: __dirname + '/assets/icon.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });

    win.loadFile('index.html');
} 

app.whenReady().then(createWindow);