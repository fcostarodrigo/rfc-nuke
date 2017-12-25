const fs = require("fs");
const walk = require("rfc-walk");
const nuke = require("./nuke");

jest.mock("fs");
jest.mock("rfc-walk");

const mockCallbacks = (caller, expectations) => {
  for (const { result, args: expectedArgs } of expectations) {
    caller.mockImplementationOnce((...args) => {
      expect(args.slice(0, -1)).toEqual(expectedArgs);
      args.pop()(...result);
    });
  }
};

describe("nuke", () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it("should delete a file", async () => {
    walk.mockReturnValue(["a"]);
    mockCallbacks(fs.unlink, [{ result: [null], args: ["a"] }]);
    await nuke();
  });

  it("should delete a folder", async () => {
    walk.mockReturnValue(["a"]);
    mockCallbacks(fs.unlink, [{ result: [{ code: "EISDIR" }], args: ["a"] }]);
    mockCallbacks(fs.rmdir, [{ result: [null], args: ["a"] }]);
    await nuke();
  });

  it("should propagate unlink errors", async () => {
    const error = new Error();
    walk.mockReturnValue(["a"]);
    mockCallbacks(fs.unlink, [{ result: [error], args: ["a"] }]);
    await expect(nuke()).rejects.toThrow(error);
  });

  it("should propagate rmdir errors", async () => {
    const error = new Error();
    walk.mockReturnValue(["a"]);
    mockCallbacks(fs.unlink, [{ result: [{ code: "EISDIR" }], args: ["a"] }]);
    mockCallbacks(fs.rmdir, [{ result: [error], args: ["a"] }]);
    await expect(nuke()).rejects.toThrow(error);
  });

  it("should delete files before their folders", async () => {
    walk.mockReturnValue(["a", "a/b"]);
    mockCallbacks(fs.unlink, [
      { result: [null], args: ["a/b"] },
      { result: [{ code: "EISDIR" }], args: ["a"] }
    ]);
    mockCallbacks(fs.rmdir, [{ result: [null], args: ["a"] }]);
    await nuke();
  });

  it("should delete sibling files", async () => {
    walk.mockReturnValue(["a", "b"]);
    mockCallbacks(fs.unlink, [
      { result: [null], args: ["b"] },
      { result: [null], args: ["a"] }
    ]);
    await nuke();
  });
});
