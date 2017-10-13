'use strict';
const {app} = require('electron');
const {BrowserWindow} = require('electron');

app.on('window-all-closed', () => {
    app.quit()
});

app.on('ready', function () {
    let win = new BrowserWindow({width: 800, height: 300, resizable: true});

    win.on('closed', () => {
        win = null
    });

    win.loadURL('file://' + __dirname + '/app/index.html');

    win.openDevTools();
});
