# RFC-NUKE

[![Build Status](https://travis-ci.org/fcostarodrigo/rfc-nuke.svg?branch=master)](https://travis-ci.org/fcostarodrigo/rfc-nuke)
[![Maintainability](https://api.codeclimate.com/v1/badges/878cca557dfef4bd7453/maintainability)](https://codeclimate.com/github/fcostarodrigo/rfc-nuke/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/878cca557dfef4bd7453/test_coverage)](https://codeclimate.com/github/fcostarodrigo/rfc-nuke/test_coverage)

Simple node module to remove files and folders recursively.

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

* `pathToDelete`: Path with folder or file to delete.

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
