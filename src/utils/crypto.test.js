import * as crypto from "./crypto";

describe("hash", () => {
  it("produces string", () => {
    const hash = crypto.hash("cat");
    expect(typeof hash).toBe("string");
  });

  it("is deterministic", () => {
    const hash1 = crypto.hash("cat");
    const dogHash = crypto.hash("dog");
    const hash2 = crypto.hash("cat");
    expect(hash1).toBe(hash2);
    expect(hash1).not.toBe(dogHash);
  });
});
