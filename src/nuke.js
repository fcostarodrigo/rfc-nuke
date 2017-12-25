const fs = require("fs");
const walk = require("rfc-walk");

const nuke = async root => {
  const files = (await walk({ root, includeFolders: true })).reverse();
  for (const file of files) {
    try {
      fs.unlinkSync(file);
    } catch (error) {
      if (error.code === "EISDIR") {
        fs.rmdirSync(file);
      } else {
        throw error;
      }
    }
  }
};

module.exports = nuke;
