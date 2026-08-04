const { app, BrowserWindow, WebContentsView } = require('electron');

const HEADER_HEIGHT = 55;
const USER_AGENT =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: 'WhatsApp Dual',
    webPreferences: {
      contextIsolation: true,
      sandbox: true,
    },
  });

  win.loadFile('index.html');

  const personalView = new WebContentsView({
    webPreferences: { partition: 'persist:whatsapp-personal' },
  });
  const businessView = new WebContentsView({
    webPreferences: { partition: 'persist:whatsapp-business' },
  });
  win.contentView.addChildView(personalView);
  win.contentView.addChildView(businessView);

  personalView.webContents.setUserAgent(USER_AGENT);
  businessView.webContents.setUserAgent(USER_AGENT);
  personalView.webContents.loadURL('https://web.whatsapp.com/');
  businessView.webContents.loadURL('https://web.whatsapp.com/');

  const layout = () => {
    const { width, height } = win.getContentBounds();
    const half = Math.floor(width / 2);
    personalView.setBounds({ x: 0, y: HEADER_HEIGHT, width: half, height: height - HEADER_HEIGHT });
    businessView.setBounds({ x: half, y: HEADER_HEIGHT, width: width - half, height: height - HEADER_HEIGHT });
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
