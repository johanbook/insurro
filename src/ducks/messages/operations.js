import socket from "../socket";
export const sendMessage = (message) => socket.sendMessage(message);
export const indicateTyping = (isTyping) => socket.indicateTyping(isTyping);
