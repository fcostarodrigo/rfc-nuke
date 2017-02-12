const fs = require('fs');
const walk = require('rfc-walk');

function nuke(root) {
  for (const file of walk(root, true)) {
    try {
      fs.unlinkSync(file);
    } catch (error) {
      if (error.code === 'EISDIR') {
        fs.rmdirSync(file);
      } else {
        throw error;
      }
    }
  }
}

module.exports = nuke;
