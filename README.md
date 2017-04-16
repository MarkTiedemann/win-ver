# win-ver

**Get the Windows version as returned by [`ver`](https://en.wikipedia.org/wiki/Ver_(command)).**

## Installation

```
npm install win-ver
```

## Quickstart

```js
const ver = require('win-ver')

ver()
  .then(console.log) // => '10.0.15063'
  .catch(console.error)
```

## API

- Returns a `Promise` which either
  - resolves with the semver version string
  - or rejects with `EWIN32ONLY` (if `process.platform` is not `win32`),
  - or rejects with any error that occured while executing `ver`.

## License

[WTFPL](http://www.wtfpl.net/) – Do What the F*ck You Want to Public License.

Made with :heart: by [@MarkTiedemann](https://twitter.com/MarkTiedemannDE).