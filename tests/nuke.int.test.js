const fs = require("fs");
const nuke = require("../.");

describe("nuke", () => {
  it("should delete a file", async () => {
    fs.writeFileSync("tests/a", "");
    await nuke("tests/a");
  });

  it("should delete an empty folder", async () => {
    fs.mkdirSync("tests/a");
    await nuke("tests/a");
  });

  it("should delete a folder with a file inside", async () => {
    fs.mkdirSync("tests/a");
    fs.writeFileSync("tests/a/b", "");
    await nuke("tests/a");
  });

  it("should delete a folder recursively", async () => {
    fs.mkdirSync("tests/a");
    fs.mkdirSync("tests/a/b");
    fs.writeFileSync("tests/a/b/c", "");
    await nuke("tests/a");
  });
});
