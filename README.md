# RFC-NUKE

Simple node module to remove files and folders recursively.

## Installation

    npm install rfc-nuke

## Usage

    const nuke = require('rfc-nuke');

    nuke('a/b');

## Reference

    nuke(pathToDelete)

Remove folder and all files in it, including other folders.

* `pathToDelete`: Path with folder or file to delete.

## Development

    npm test

## License

[MIT License](http://www.opensource.org/licenses/mit-license.php)
