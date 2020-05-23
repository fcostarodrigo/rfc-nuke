# RFC-NUKE

[![Build Status](https://travis-ci.org/fcostarodrigo/rfc-nuke.svg?branch=master)](https://travis-ci.org/fcostarodrigo/rfc-nuke)

Simple node module to remove files and folders recursively.

DEPRECATED: See [@fcostarodrigo/nuke](https://www.npmjs.com/package/@fcostarodrigo/nuke)

## Installation

```bash
npm install rfc-nuke
```

## Usage

```javascript
const nuke = require("rfc-nuke");

nuke("path/to/remove").then(() => console.log("Files removed"));
```

## Documentation

```typescript
function nuke(pathToDelete: string): Promise<void>;
```

Removes files and folders recursively.

- `pathToDelete`: Path with folder or file to delete.

## Development

Full tests with coverage

```bash
npm test
```

Unit tests and watch for changes

```bash
npm run unit-test
```

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
