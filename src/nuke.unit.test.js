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
});
