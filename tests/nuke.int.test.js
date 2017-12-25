const fs = require("fs");
const nuke = require("../.");

describe("nuke", () => {
  it("should delete a file", async () => {
    fs.writeFileSync("a", "");
    await nuke("a");
  });

  it("should delete an empty folder", async () => {
    fs.mkdirSync("a");
    await nuke("a");
  });

  it("should delete a folder with a file inside", async () => {
    fs.mkdirSync("a");
    fs.writeFileSync("a/b", "");
    await nuke("a");
  });

  it("should delete a folder recursively", async () => {
    fs.mkdirSync("a");
    fs.mkdirSync("a/b");
    fs.writeFileSync("a/b/c", "");
    await nuke("a");
  });
});
