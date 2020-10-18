const crypto = require("crypto");

exports.hash = (string) => {
  const hasher = crypto.createHash("sha1");
  hasher.update(string, "utf-8");
  return hasher.digest("hex");
};
