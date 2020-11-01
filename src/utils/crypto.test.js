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

describe("hashnumber", () => {
  it("is deterministic", () => {
    const hash1 = crypto.hashnumber("cat");
    const dogHash = crypto.hashnumber("dog");
    const hash2 = crypto.hashnumber("cat");
    expect(hash1).toBe(98262);
    expect(hash1).not.toBe(dogHash);
    expect(hash1).toBe(hash2);
  });
});

describe("hashcolor", () => {
  it("prodouces a color", () => {
    const color = crypto.hashcolor("dog");
    expect(color).toBe("rgb(182,171,166)");
  });
});
