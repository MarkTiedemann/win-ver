const { exec } = require('child_process')
const isWin = process.platform === 'win32'

module.exports = () =>
  new Promise((resolve, reject) => !isWin
    ? reject(new Error('EWIN32ONLY'))
    : exec('ver', (err, stdout) => err
      ? reject(err)
      : resolve(/\[Version (.*)\]/g
        .exec(stdout.trim())[1])
    )
  )
