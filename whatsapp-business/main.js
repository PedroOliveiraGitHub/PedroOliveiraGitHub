const { app, BrowserWindow, WebContentsView } = require('electron');

const HEADER_HEIGHT = 55;
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 900,
    title: 'WhatsApp Business',
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
    },
  });

  win.loadFile('index.html');

  const view = new WebContentsView({
    webPreferences: {
      partition: 'persist:whatsapp-business',
    },
  });
  win.contentView.addChildView(view);
  view.webContents.setUserAgent(USER_AGENT);
  view.webContents.loadURL('https://web.whatsapp.com/');

  const layout = () => {
    const { width, height } = win.getContentBounds();
    view.setBounds({ x: 0, y: HEADER_HEIGHT, width, height: height - HEADER_HEIGHT });
  };
  layout();
  win.on('resize', layout);
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
