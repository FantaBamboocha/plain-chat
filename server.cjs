const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = createServer(app);

app.use(cors());

app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5173", // Указываем разрешенный источник
    methods: ["GET", "POST"], // Указываем разрешенные методы
  },
});

// app.use(
//   cors({
//     origin: ["http://127.0.0.1:5173", "http://localhost:3000"],
//     methods: ["GET", "POST"],
//   })
// );

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
  socket.on("join", ({ roomId, userName }) => {
    console.log("join", roomId, userName);
    socket.join(roomId);
    rooms.get(roomId).get("users").set(socket.id, userName);

    const users = Array.from(rooms.get(roomId).get("users").values());
    console.log(users);

    socket.to(roomId).emit("joined", {
      users,
    });
  });

  console.log("a user connected", socket.id);
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
