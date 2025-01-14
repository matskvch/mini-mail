const { app, BrowserWindow } = require('electron')
const path = require('path')

async function createWindow() {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // adding node.js
            preload: path.join(__dirname, 'preload.js') // connecting preload script + note 2
        }
    })
    window.loadFile('src/index.html')
}

app.whenReady().then(createWindow) // note 3

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { // note 4
        app.quit()
    }
})
