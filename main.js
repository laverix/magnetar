const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    minWidth: 722,
    minHeight: 434,
    maxWidth: 950,
    maxHeight: 620,
    width: 722,
    height: 434,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: true,
    title: 'Magnetar',
    backgroundColor: '#ffffff',
    icon: path.join(__dirname, 'dist/assets/icons/png/64x64.png')
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
});
