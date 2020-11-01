const crypto = require("crypto");

exports.hash = (string) => {
  const hasher = crypto.createHash("sha1");
  hasher.update(string, "utf-8");
  return hasher.digest("hex");
};

const hashnumber = (string, mod) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    let chr = string.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  hash = Math.abs(hash);
  return mod ? hash % mod : hash;
};
exports.hashnumber = hashnumber;

exports.hashcolor = (string) => {
  const r = hashnumber(string + "r", 256);
  const g = hashnumber(string + "g", 256);
  const b = hashnumber(string + "b", 256);
  return `rgb(${r},${g},${b})`;
};
