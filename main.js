'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 300,
        minHeight: 300,
        width: 800,
        minWidth: 800,
        resizable: true
    });

    mainWindow.loadURL('file://' + __dirname + '/app/index.html');

    mainWindow.openDevTools();
});
