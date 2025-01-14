const { app, BrowserWindow } = require('electron')
const path = require('path') // modules import

async function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // adding node.js
            preload: path.join(__dirname, 'preload.js') // connecting preload script
        }
    })
    window.loadFile('src/index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
