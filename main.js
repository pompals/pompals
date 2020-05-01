const { BrowserWindow } = require('electron')
const { menubar } = require('menubar');

//let win = new BrowserWindow()
//win.webContents.openDevTools()

const mb = menubar();

mb.on('ready', () => {
  console.log('ready');
});

mb.on('after-create-window', () => {
  console.log('after-create-window');
  mb.window.openDevTools();
})