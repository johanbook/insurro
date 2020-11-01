module.exports = (message = "") => {
  if (message.startsWith(">>")) {
    const command = message.slice(2, message.length);
    try {
      message = eval(command);
    } catch {}
    return message;
  }
  return message;
};
