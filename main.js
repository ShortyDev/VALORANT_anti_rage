const {
  app,
  globalShortcut
} = require('electron')

app.whenReady().then(() => {
  globalShortcut.register('Enter', () => {
      console.log('Don\'t rage! You will get banned again.')
  })
})