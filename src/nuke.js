const fs = require("fs");
const util = require("util");
const walk = require("rfc-walk");

const rmdir = util.promisify(fs.rmdir);
const unlink = util.promisify(fs.unlink);

const nuke = async (root) => {
  const files = (await walk({ root, includeFolders: true })).reverse();

  const removeDir = (file) => (error) =>
    error.code === "EISDIR" ? rmdir(file) : Promise.reject(error);

  for (const file of files) {
    await unlink(file).catch(removeDir(file));
  }
};

module.exports = nuke;
