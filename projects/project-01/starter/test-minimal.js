const { app, BrowserWindow } = require('electron');

console.log('[test] app type:', typeof app);
console.log('[test] BrowserWindow type:', typeof BrowserWindow);

app.whenReady().then(() => {
  console.log('[test] App is ready');
  const win = new BrowserWindow();
  win.loadURL('data:text/html,<h1>Hello</h1>');
});
