require("dotenv").config();
const express = require("express");
const { connectDb } = require("./Db/DataBase");
const cors = require("cors");
const http = require("http"); 
const { Server } = require("socket.io");

const Register = require("./routes/Register_Routes");
const Login = require("./routes/Login_Routes");
const CreateNotes = require("./routes/Notes_Routes");
const EditRoutes = require("./routes/NotesAccess_Routes");

const app = express();
connectDb();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Create HTTP server for socket.io
const server = http.createServer(app);

// Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Socket.IO Logic
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  // Custom events like "note-updated", etc., can be handled here
});

// Make `io` available to routes
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api/Register", Register);
app.use("/api/Login", Login);
app.use("/api/CreateNotes", CreateNotes);
app.use("/api/notes", EditRoutes); 

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
