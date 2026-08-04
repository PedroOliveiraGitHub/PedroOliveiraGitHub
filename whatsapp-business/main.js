const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 900,
    title: 'WhatsApp Business',
    webPreferences: {
      webviewTag: true,
      contextIsolation: true,
      sandbox: true,
    },
  });

  win.loadFile('index.html');
  win.webContents.openDevTools({ mode: 'right' });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
