const express = require("express");
const soket = require("socket.io");

const app = express();
const server = require("http").Server(app);
const io = soket(server);

const dataBase = new Map();

app.get("/wow", (req, res) => {
  res.json(dataBase);
});

io.on("connection", (socket) => {
  console.log("user connected", socket);
});

server.listen(3000, (error) => {
  if (error) {
    throw new Error(error);
  }
  console.log("PLAIN-CHAT-APP listening on port 3000!");
});
