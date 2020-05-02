const { menubar } = require('menubar');

let url;

if (process.env.NODE_ENV === 'dev') {
  url = 'http://localhost:8081';
} else {
  url = `file://${process.cwd()}/dist/index.html`;
}

const mb = menubar({
  index: url
});

mb.on('ready', () => {
  console.log('mb-ready');
});

mb.on('after-create-window', () => {
  console.log('mb-after-create-window');
  mb.window.openDevTools();
});
