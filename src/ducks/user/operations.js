import socket from "../socket";

export const identify = ({ handle }) => socket.init({ handle });
