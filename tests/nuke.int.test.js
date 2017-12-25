const fs = require("fs");
const nuke = require("../.");

describe("nuke", function() {
  it("should delete a file", function() {
    fs.writeFileSync("a", "");
    nuke("a");
  });

  it("should delete an empty folder", function() {
    fs.mkdirSync("a");
    nuke("a");
  });

  it("should delete a folder with a file inside", function() {
    fs.mkdirSync("a");
    fs.writeFileSync("a/b", "");
    nuke("a");
  });

  it("should delete a folder recursively", function() {
    fs.mkdirSync("a");
    fs.mkdirSync("a/b");
    fs.writeFileSync("a/b/c", "");
    nuke("a");
  });
});
