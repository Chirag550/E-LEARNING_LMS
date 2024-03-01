import { Socket, Server as SocketIOServer } from "socket.io";

import http from "http";

export const initSocketServer = (server: http.Server) => {
  const io = new SocketIOServer(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("notification", (data) => {
      io.emit("newNotification", data);
    });
    socket.on("disconnect", () => {
      console.log("a user disconnected");
    });
  });
};
