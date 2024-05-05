const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173", // Указываем разрешенный источник
    methods: ["GET", "POST"], // Указываем разрешенные методы
  },
});

app.use(express.json());

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:3000"],
    methods: ["GET", "POST"],
  })
);

const rooms = new Map();

app.post("/", (req, res) => {
  const { roomId, userName } = req.body;

  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", new Map()],
        ["messages", []],
      ])
    );
  }

  const roomsObject = Object.fromEntries(rooms);

  res.json(roomsObject);
});

io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
